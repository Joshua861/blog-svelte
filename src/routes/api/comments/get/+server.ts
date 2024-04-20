import { init } from '$lib/utils/firebase';
import { json } from '@sveltejs/kit';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';

export const GET = async ({ request }) => {
	const url = new URL(request.url);
	const postID = decodeURIComponent(await url.searchParams.get('postID')!.toString());
	const { db } = await init();
	const comments = [];

	const noReplies = (
		await getDocs(
			query(
				collection(db, 'comments'),
				orderBy('time', 'desc'),
				where('replyID', '==', null),
				where('postID', '==', postID)
			)
		)
	).docs;

	for (const commentRef of noReplies) {
		const comment = commentRef.data();

		comments.push({
			...comment,
			id: commentRef.id,
			replies: await getReplies(commentRef.id)
		});
	}

	return json(comments);
};

async function getReplies(id: string) {
	const { db } = await init();

	const comments = (
		await getDocs(
			query(collection(db, 'comments'), orderBy('time', 'desc'), where('replyID', '==', id))
		)
	).docs;

	const _comments = [];

	for (const commentRef of comments) {
		const comment = commentRef.data();
		_comments.push({
			...comment,
			id: commentRef.id,
			replies: await getReplies(commentRef.id)
		});
	}

	return _comments;
}
