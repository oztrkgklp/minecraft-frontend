import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "../../redux/slices/gameSlice";
import Header from "../Header";
import Footer from "../Footer";
import parse from "html-react-parser";
import { getTopPlayers } from "../../redux/slices/topPlayerSlice";
import goldBadge from "../../assets/gold-badge.svg";
import silverBadge from "../../assets/silver-badge.svg";
import bronzeBadge from "../../assets/bronz-badge.svg";
import $ from "jquery";
import "select2"; 
import "select2/dist/css/select2.css";


const LeaderboardPage = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    $(document).ready(function () {
        $(".select2").select2({
            minimumResultsForSearch: -1,
        });
    });

    const dispatch = useDispatch();
    const games = useSelector((state) => state.games.value);
    const topPlayers = useSelector((state) => state.topPlayers.value);

    const selectedGame = useSelector((state) => state.selectedGame.value);

    React.useEffect(() => {
        dispatch(getGames());
        dispatch(getTopPlayers());
    }, []);
    return (
        <div>
            <Header />
            <div className="standings-wrapper">
                <div className="container">
                    <div className="filters-area">
                        <div className="filter-col">
                            <label>Oyun</label>
                            <select className="select2">
                                {games.map((game) => (
                                    <option key={game.id} value={game.id}>
                                        {game.title}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="filter-col">
                            <a href="#">Listele</a>
                        </div>
                    </div>

                    <div className="standings-general">
                        <div className="standings-content">
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Kafa</th>
                                        <th>Oyuncu</th>
                                        <th>Öldürme</th>
                                        <th>Ölme</th>
                                        <th>Kazanma</th>
                                        <th>Puan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {topPlayers.map((player) => (
                                        <tr>
                                            <td>{player !== undefined ? (player.rank === 1 ? parse(`<img src=${goldBadge} alt=""></img>`) : player.rank === 2 ? parse(`<img src=${silverBadge} alt=""></img>`) : player.rank === 3 ? parse(`<img src=${bronzeBadge} alt=""></img>`) : player.id) : ""}</td>
                                            <td>{parse(`<img src=${player !== undefined ? player.photo : ""} alt=""></img>`)}</td>
                                            <td>{player !== undefined ? player.name : ""}</td>
                                            <td>{player !== undefined ? player.kill : ""}</td>
                                            <td>{player !== undefined ? player.death : ""}</td>
                                            <td>{player !== undefined ? player.win : ""}</td>
                                            <td>
                                                {player !== undefined ? player.score : ""}
                                                <a href="#" className="see-profile">
                                                    Profil
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="standings-side">
                            <div className="monthly-standings">
                                <div className="head">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30.841" height="37.552" viewBox="0 0 30.841 37.552">
                                        <g id="badge" opacity="0.2">
                                            <path id="Path_117" data-name="Path 117" d="M26.954,2.25,29.09,6.272l4.568.555L30.306,9.849l.671,4.468L26.954,11.8l-4.022,2.514L23.6,9.848,20.25,6.828l4.693-.555Z" transform="translate(-2.817 -2.241)" fill="#fff" />
                                            <path id="Path_118" data-name="Path 118" d="M29.381,17.334l-2.6-.667A9.377,9.377,0,1,1,20.042,5.229l.669-2.6A12.054,12.054,0,0,0,9.648,23.289V39.794l8.045-5.363,8.045,5.363V23.312a12.017,12.017,0,0,0,3.643-5.978Zm-6.325,17.45-5.363-3.576L12.33,34.784V25.112a11.966,11.966,0,0,0,10.727.008Z" transform="translate(-5.623 -2.243)" fill="#fff" />
                                        </g>
                                    </svg>
                                    <p>
                                        <b>Night, Monster, Love</b> <br />
                                        Aylık sıralama ödülleri
                                    </p>
                                </div>
                                <div className="content">
                                    {games.map((game, index) => (
                                        <div className="player">
                                            <p>{game.detail.players[index] !== undefined ? game.detail.players[index].rank + ".OYUNCU" : ""}</p>
                                            <span>{game.detail.awards[index] !== undefined ? game.detail.awards[index].award.amount + game.detail.awards[index].award.amountUnit : ""}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="side-info-box">
                                <b>BedWars Hakkında Daha Fazlası</b>
                                <a href="#"> BedWars Bilgilendirme Sayfası</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LeaderboardPage;
