
interface CreatePostModel {
	title: string; 
	content: string;
	date: string;
	author: string | undefined;
}

export default CreatePostModel;