import UserModel from "./UserModel";

interface PostModel {
	id: string;
	title: string; 
	content: string;
	date: string;
	author: UserModel | undefined;
}

export default PostModel;