import Conf from '../Conf/Conf';
import { Client, Databases, Storage, ID, Query } from 'appwrite';

class ConfigService {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(Conf.appWriteUrl)
            .setProject(Conf.appWriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    // 📝 Create a new post
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                Conf.appWriteDatabaseId,
                Conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
        } catch (error) {
            console.error("Appwrite ConfigService :: createPost :: error", error);
        }
    }

    // ✏️ Update post
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                Conf.appWriteDatabaseId,
                Conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            );
        } catch (error) {
            console.error("Appwrite ConfigService :: updatePost :: error", error);
        }
    }

    // ❌ Delete post
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                Conf.appWriteDatabaseId,
                Conf.appWriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.error("Appwrite ConfigService :: deletePost :: error", error);
            return false;
        }
    }

    // 📄 Get single post
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                Conf.appWriteDatabaseId,
                Conf.appWriteCollectionId,
                slug
            );
        } catch (error) {
            console.error("Appwrite ConfigService :: getPost :: error", error);
        }
    }

    // 📚 Get all posts
    async getPosts(queries = [Query.equal('status', 'active')]) {
        try {
            return await this.databases.listDocuments(
                Conf.appWriteDatabaseId,
                Conf.appWriteCollectionId,
                queries
            );
        } catch (error) {
            console.error("Appwrite ConfigService :: getPosts :: error", error);
            return false;
        }
    }

    // 📤 Upload file
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                Conf.appWriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.error("Appwrite ConfigService :: uploadFile :: error", error);
            return false;
        }
    }

    // 🗑️ Delete file
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                Conf.appWriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.error("Appwrite ConfigService :: deleteFile :: error", error);
            return false;
        }
    }

    // 👀 Get file preview URL
    getPreview(fileId) {
        return this.bucket.getFileView(
            Conf.appWriteBucketId,
            fileId
        );
    }
}

const configService = new ConfigService();
export default configService;





