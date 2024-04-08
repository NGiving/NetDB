import MovieList from "../components/MovieList";
import BrowsePanel from "../components/BrowsePanel";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MovieBrowser = () => {
    return (
        <div className="content-wrap">
            <Header />
            <BrowsePanel />
            <MovieList />
            <Footer />
        </div>
    );
}

export default MovieBrowser;