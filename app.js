const app = Vue.createApp({
    data (){
        return {
            showBooks:true,
            books: [
                { bookName: "To Kill a Mockingbird", authorName: "Harper Lee",isfav:false, imageUrl: "https://covers.openlibrary.org/b/id/8228691-L.jpg" },
                { bookName: "1984", authorName: "George Orwell",isfav:false, imageUrl: "https://covers.openlibrary.org/b/id/7222246-L.jpg" },
                { bookName: "Pride and Prejudice", authorName: "Jane Austen",isfav:true, imageUrl: "https://covers.openlibrary.org/b/id/8091016-L.jpg" },
                { bookName: "The Great Gatsby", authorName: "F. Scott Fitzgerald",isfav:true, imageUrl: "https://covers.openlibrary.org/b/id/8091016-L.jpg" },
                { bookName: "Moby-Dick", authorName: "Herman Melville", isfav:false, imageUrl: "https://covers.openlibrary.org/b/id/7222161-L.jpg" },
                { bookName: "War and Peace", authorName: "Leo Tolstoy", isfav:true,imageUrl: "https://covers.openlibrary.org/b/id/8131111-L.jpg" },
                { bookName: "The Catcher in the Rye", authorName: "J.D. Salinger",isfav:true, imageUrl: "https://covers.openlibrary.org/b/id/8235116-L.jpg" },
                { bookName: "The Hobbit", authorName: "J.R.R. Tolkien", isfav:false,imageUrl: "https://covers.openlibrary.org/b/id/8236061-L.jpg" },
                { bookName: "Brave New World", authorName: "Aldous Huxley",isfav:true, imageUrl: "https://covers.openlibrary.org/b/id/8209254-L.jpg" },
                { bookName: "Crime and Punishment", authorName: "Fyodor Dostoevsky",isfav:false, imageUrl: "https://covers.openlibrary.org/b/id/8259395-L.jpg" }
            ],      
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        changefav (book){
            book.isfav= !book.isfav
        }
    },
    computed:{
        favFiltration () {
            return this.books.filter((book)=> book.isfav)
        }
    }
})

app.mount('#app')