import localDb from '../data/local-database.json';


export abstract class PostProvider {
    abstract getPosts(): Promise<any>;
}


export class LocalDataBaseService implements PostProvider {

    // async getFakePosts() {
    async getPosts() {
        return [
            {
                'userId': 1,
                'id': 1,
                'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                'body': 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
            },
            {
                'userId': 1,
                'id': 2,
                'title': 'qui est esse',
                'body': 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
            }]
    }

}


export class JsonDataBaseService implements PostProvider {

    async getPosts() {
        return localDb;
    }
}


export class ApiDataService implements PostProvider {

    async getPosts() {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await resp.json();

        return data;
    }
}