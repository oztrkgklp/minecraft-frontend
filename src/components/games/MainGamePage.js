import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGames } from "../../redux/slices/gameSlice";
import Header from "../Header";
import Footer from "../Footer";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import {getGame} from "../../redux/slices/selectedGameSlice";
import { useNavigate } from "react-router-dom";

const MainGamePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const games = useSelector((state) => state.games.value);
  React.useEffect(() => {
    dispatch(getGames());
  }, []);
  const handleClick = (id) => {
    dispatch(getGame(id));
    window.setTimeout(() => {navigate(routes.Arrangement)},300)
  }
  return (
    <div>
      <Header />
      <div class="gap"></div>

      <div class="games-wrapper">
        <div class="container">
          <div class="section-title">
            <span>Riva Network'de Yapabileceğin Çok Şey Var!</span>
            <b>Oynayabileceğin Tüm Minecraft Oyunlarımız</b>
          </div>
          
          <div class="games-list-wrap">
          <div class="side-button">
                      <Link to={routes.Leaderboard}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16.895"
                          height="15.791"
                          viewBox="0 0 16.895 15.791"
                        >
                          <g
                            id="Group_44"
                            data-name="Group 44"
                            transform="translate(1 1.414)"
                          >
                            <g
                              id="Icon_feather-arrow-right"
                              data-name="Icon feather-arrow-right"
                              transform="translate(8)"
                            >
                              <path
                                id="Path_31"
                                data-name="Path 31"
                                d="M24.481,7.5,18,13.981l6.481,6.481"
                                transform="translate(-18 -7.5)"
                                fill="none"
                                stroke="#000000"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                              />
                            </g>
                            <g
                              id="Icon_feather-arrow-right-2"
                              data-name="Icon feather-arrow-right"
                            >
                              <path
                                id="Path_31-2"
                                data-name="Path 31"
                                d="M24.481,7.5,18,13.981l6.481,6.481"
                                transform="translate(-18 -7.5)"
                                fill="none"
                                stroke="#000000"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                              />
                            </g>
                          </g>
                        </svg>
                        SIRALAMAYI GÖR
                      </Link>
                    </div>
            {games.map((game) => (
                <div class="game-item"  onClick={()=> handleClick(game.id)}>
                
                  <div class="image">
                    {parse(`<img src=${game.image} alt=""></img>`)}{" "}
                  </div>
                  <div class="detail">
                    <div class="name">
                      {parse(`<img src=${game.icon} alt=""></img>`)}
                      {game.title}
                    </div>
                    <a href="#" class="primary-btn normal-shadow">
                      DEVAMINI OKU
                    </a>
                  </div>
                </div>
            ))}
          </div>
          <div class="paginate">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16.895"
                height="15.791"
                viewBox="0 0 16.895 15.791"
              >
                <g
                  id="Group_44"
                  data-name="Group 44"
                  transform="translate(1 1.414)"
                >
                  <g
                    id="Icon_feather-arrow-right"
                    data-name="Icon feather-arrow-right"
                    transform="translate(8)"
                  >
                    <path
                      id="Path_31"
                      data-name="Path 31"
                      d="M24.481,7.5,18,13.981l6.481,6.481"
                      transform="translate(-18 -7.5)"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </g>
                  <g
                    id="Icon_feather-arrow-right-2"
                    data-name="Icon feather-arrow-right"
                  >
                    <path
                      id="Path_31-2"
                      data-name="Path 31"
                      d="M24.481,7.5,18,13.981l6.481,6.481"
                      transform="translate(-18 -7.5)"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </g>
                </g>
              </svg>
              &nbsp;ÖNCEKİ
            </a>
            <a href="#">
              SONRAKİ&nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16.895"
                height="15.791"
                viewBox="0 0 16.895 15.791"
              >
                <g
                  id="Group_413"
                  data-name="Group 413"
                  transform="translate(-1259.099 -2805.604)"
                >
                  <g
                    id="Icon_feather-arrow-right"
                    data-name="Icon feather-arrow-right"
                    transform="translate(1242.513 2799.519)"
                  >
                    <path
                      id="Path_31"
                      data-name="Path 31"
                      d="M18,7.5l6.481,6.481L18,20.462"
                      transform="translate(0)"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </g>
                  <g
                    id="Icon_feather-arrow-right-2"
                    data-name="Icon feather-arrow-right"
                    transform="translate(1250.513 2799.519)"
                  >
                    <path
                      id="Path_31-2"
                      data-name="Path 31"
                      d="M18,7.5l6.481,6.481L18,20.462"
                      transform="translate(0)"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="gap"></div>
      <div class="games-wrapper">
        <div class="container">
          <div class="section-title">
            <span>Sıralamaları burdan gör</span>
            <b>Sıralamasını Görmek İstediğin Oyunu Seç</b>
          </div>
          <div class="games-list-wrap">
            <div class="side-button">
              <Link to={routes.Leaderboard}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16.895"
                  height="15.791"
                  viewBox="0 0 16.895 15.791"
                >
                  <g
                    id="Group_44"
                    data-name="Group 44"
                    transform="translate(1 1.414)"
                  >
                    <g
                      id="Icon_feather-arrow-right"
                      data-name="Icon feather-arrow-right"
                      transform="translate(8)"
                    >
                      <path
                        id="Path_31"
                        data-name="Path 31"
                        d="M24.481,7.5,18,13.981l6.481,6.481"
                        transform="translate(-18 -7.5)"
                        fill="none"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </g>
                    <g
                      id="Icon_feather-arrow-right-2"
                      data-name="Icon feather-arrow-right"
                    >
                      <path
                        id="Path_31-2"
                        data-name="Path 31"
                        d="M24.481,7.5,18,13.981l6.481,6.481"
                        transform="translate(-18 -7.5)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </g>
                  </g>
                </svg>
                &nbsp;SIRALAMAYI GÖR
              </Link>
            </div>
            {games.map((game) => (
              <div class="game-item" onClick={()=>handleClick(game.id)}>
                <div class="image">
                  {parse(`<img src=${game.image} alt=""></img>`)}{" "}
                </div>
                <div class="detail">
                  <div class="name">
                    {parse(`<img src=${game.icon} alt=""></img>`)}
                    {game.title}
                  </div>
                  <Link
                    to={routes.Leaderboard}
                    class="primary-btn normal-shadow"
                  >
                    DEVAMINI OKU
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div class="paginate">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16.895"
                height="15.791"
                viewBox="0 0 16.895 15.791"
              >
                <g
                  id="Group_44"
                  data-name="Group 44"
                  transform="translate(1 1.414)"
                >
                  <g
                    id="Icon_feather-arrow-right"
                    data-name="Icon feather-arrow-right"
                    transform="translate(8)"
                  >
                    <path
                      id="Path_31"
                      data-name="Path 31"
                      d="M24.481,7.5,18,13.981l6.481,6.481"
                      transform="translate(-18 -7.5)"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </g>
                  <g
                    id="Icon_feather-arrow-right-2"
                    data-name="Icon feather-arrow-right"
                  >
                    <path
                      id="Path_31-2"
                      data-name="Path 31"
                      d="M24.481,7.5,18,13.981l6.481,6.481"
                      transform="translate(-18 -7.5)"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </g>
                </g>
              </svg>
              &nbsp;ÖNCEKİ
            </a>
            <a href="#">
              SONRAKİ&nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16.895"
                height="15.791"
                viewBox="0 0 16.895 15.791"
              >
                <g
                  id="Group_413"
                  data-name="Group 413"
                  transform="translate(-1259.099 -2805.604)"
                >
                  <g
                    id="Icon_feather-arrow-right"
                    data-name="Icon feather-arrow-right"
                    transform="translate(1242.513 2799.519)"
                  >
                    <path
                      id="Path_31"
                      data-name="Path 31"
                      d="M18,7.5l6.481,6.481L18,20.462"
                      transform="translate(0)"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </g>
                  <g
                    id="Icon_feather-arrow-right-2"
                    data-name="Icon feather-arrow-right"
                    transform="translate(1250.513 2799.519)"
                  >
                    <path
                      id="Path_31-2"
                      data-name="Path 31"
                      d="M18,7.5l6.481,6.481L18,20.462"
                      transform="translate(0)"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MainGamePage;
