import { init } from "$lib/utils/firebase";
import { addDoc, collection } from "firebase/firestore";

export const actions = {
 default: async ({ request }) => {
    const formData = await request.formData();
    const username = formData.get('username');
    const content = formData.get('content');
    const postID = formData.get("postID");
    let replyID = formData.get("replyID");
    const time = Date.now();
    const { db } = await init();

    replyID = replyID == '' ? null : replyID

    await addDoc(collection(db, 'comments'), {
      username, content, postID, replyID, time
    });
 }
};