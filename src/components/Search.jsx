import React from "react";
// import { Img } from "react-image";

import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import client from "../images/client-image.png";
import hero from "../images/hero-image.png";
import testimonial from "../images/testimonial-image.png";
import testLogo from "../images/test-logo.png";
import loader from "../images/loader-icon.png";
import axios from "axios";
import { useState } from "react";
const Search = () => {
  const dummyTestData = [
    {
      company: "Harrow Inc", // Company name
      slug: "harrow-inc1", // Company unique ID
      logo: testLogo,
      website: "www.harrow.com", // Company website
      isTracking: false,
      isLoaded: false,
    },
    {
      company: "Harrow Inc", // Company name
      slug: "harrow-inc2", // Company unique ID
      logo: testLogo,
      website: "www.harrow.com", // Company website
      isTracking: false,
      isLoaded: false,
    },
    {
      company: "Harrow Inc", // Company name
      slug: "harrow-inc3", // Company unique ID
      logo: testLogo,
      website: "www.harrow.com", // Company website
      isTracking: false,
      isLoaded: false,
    },
    {
      company: "Harrow Inc", // Company name
      slug: "harrow-inc4", // Company unique ID
      logo: testLogo,
      website: "www.harrow.com", // Company website
      isTracking: false,
      isLoaded: false,
    },
    {
      company: "Harrow Inc", // Company name
      slug: "harrow-inc5", // Company unique ID
      logo: testLogo,
      website: "www.harrow.com", // Company website
      isTracking: false,
      isLoaded: false,
    },
    {
      company: "Harrow Inc", // Company name
      slug: "harrow-inc6", // Company unique ID
      logo: testLogo,
      website: "www.harrow.com", // Company website
      isTracking: false,
      isLoaded: false,
    },
    {
      company: "Harrow Inc", // Company name
      slug: "harrow-inc7", // Company unique ID
      logo: testLogo,
      website: "www.harrow.com", // Company website
      isTracking: false,
      isLoaded: false,
    },
  ];
  const [isVisible, setVisible] = useState(true);
  const [isSearching, setSearching] = useState(false);
  const [fetchData, setData] = useState();
  const [useInput, setInput] = useState();
  const [imageLoaded, setLoaded] = useState(true);
  const [testData, setTestData] = useState(dummyTestData);

  const handInputChange = async (e) => {
    setVisible(false);
    setSearching(true);
    setInput(e.target.value);
    const searchQuery = useInput;
    console.log(searchQuery, "search query here");
    const baseURL = `https://tva.staging.b2brain.com/search/autocomplete_org_all/?q=${searchQuery}`;

    setTimeout(async () => {
      const data = await axios.get(baseURL);
      console.log(data.data);
      setData(data.data);
    }, 500);
  };
  const time = () => {
    const today = new Date();
    return (
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    );
  };
  const trackMain = (index) => {
    const newTestData = [...fetchData];
    newTestData[index].isTracking = true;
    newTestData[index].isLoaded = true;
    setData(newTestData);
    console.log(
      newTestData[index].company,
      newTestData[index].slug,
      "tracked at",
      time()
    );
  };
  const unTrackMain = (event) => {
    const newTestData = [...fetchData];
    newTestData[event].isTracking = false;
    setData(newTestData);
    // console.log(event, "tracking");
    console.log(
      newTestData[event].company,
      newTestData[event].slug,
      "Stopped tracking at ",
      time()
    );
  };
  const track = (index) => {
    const newTestData = [...testData];
    newTestData[index].isTracking = true;
    newTestData[index].isLoaded = true;
    setTestData(newTestData);
    console.log(
      newTestData[index].company,
      newTestData[index].slug,
      "tracked at ",
      time()
    );
  };
  const unTrack = (event) => {
    const newTestData = [...testData];
    newTestData[event].isTracking = false;
    setTestData(newTestData);
    // console.log(event, "tracking");
    console.log(
      newTestData[event].company,
      newTestData[event].slug,
      "Stopped tracking at ",
      time()
    );
  };
  return (
    <>
      <section className="search-section">
        <div className="search__bar">
          {!isVisible ? (
            <AiOutlineClose
              onClick={() => {
                setVisible(true);
                setInput("");
                setSearching(false);
              }}
            />
          ) : (
            <FaSearch className="nav__item--icon" />
          )}

          <input
            type="text"
            placeholder="Search by account name or website"
            onChange={handInputChange}
            value={useInput || ""}
            onClick={() => setVisible(false)}
          />
          <div className="search__bell--icon">
            <FaRegBell />
          </div>
          <div className="user-avatar">
            <img src={testLogo} alt="" />
          </div>
        </div>
      </section>
      {/* render this by default at start */}
      {isVisible ? (
        <>
          <section className="hero-section">
            <img src={hero} alt="" />
          </section>
          <section className="client-section">
            <img src={client} alt="" />
          </section>
          <section className="client-section">
            <img src={testimonial} alt="" />
          </section>
        </>
      ) : !isVisible && !isSearching ? (
        <>
          <section className="search-data">
            <div className="accounts-data">
              <h3 className="search__title">Similar Accounts</h3>
              <div className="accounts-container">
                {testData.map((ele, index) => (
                  <div key={ele.slug} className="accounts__box">
                    <img src={ele.logo} alt="" />
                    <div>
                      <h4 className="accounts__title">{ele.company}</h4>
                      <a className="accounts__link" href={ele.website}>
                        {ele.website}
                      </a>
                    </div>
                    {ele.isTracking && !ele.isLoaded ? (
                      <button
                        className="track-btn loading-btn"
                        onClick={() => unTrack(index)}
                      >
                        <img src={loader} alt="" /> Track
                      </button>
                    ) : ele.isTracking && ele.isLoaded ? (
                      <button
                        className="track-btn track-loaded"
                        onClick={() => unTrack(index)}
                      >
                        Tracking
                      </button>
                    ) : (
                      <button
                        className="track-btn"
                        onClick={() => track(index)}
                      >
                        Track
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="quick-actions">
              <h3 className="search__title">Quick Actions</h3>
              <h4>Track new accounts</h4>
              <h4>Bulk track accounts</h4>
              <h4>Manage accounts</h4>
            </div>
          </section>
        </>
      ) : !isVisible && isSearching ? (
        <section className="search-data">
          <div className="accounts-data">
            <h3 className="search__title">Similar Accounts</h3>
            <div className="accounts-container">
              {fetchData?.map((ele, index) => (
                <div key={ele.slug} className="accounts__box">
                  {imageLoaded ? (
                    <img
                      src={ele.logo}
                      onError={() => setLoaded(false)}
                      alt=""
                    />
                  ) : (
                    <div
                      className="no-logo"
                      style={{
                        backgroundColor: ele.color,
                      }}
                      alt=""
                    >
                      {ele.company[0]}
                    </div>
                  )}

                  <div>
                    <h4 className="accounts__title">
                      {ele.company ? ele.company : ""}
                    </h4>
                    <a
                      className="accounts__link"
                      href={ele.website ? ele.website : ""}
                    >
                      {ele.website ? ele.website : ""}
                    </a>
                  </div>
                  {ele.isTracking && !ele.isLoaded ? (
                    <button
                      className="track-btn loading-btn"
                      onClick={() => unTrackMain(index)}
                    >
                      <img src={loader} alt="" /> Track
                    </button>
                  ) : ele.isTracking && ele.isLoaded ? (
                    <button
                      className="track-btn track-loaded"
                      onClick={() => unTrackMain(index)}
                    >
                      Tracking
                    </button>
                  ) : (
                    <button
                      className="track-btn"
                      onClick={() => trackMain(index)}
                    >
                      Track
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="quick-actions">
            <h3 className="search__title">Quick Actions</h3>
            <h4>Track new accounts</h4>
            <h4>Bulk track accounts</h4>
            <h4>Manage accounts</h4>
          </div>
        </section>
      ) : (
        ""
      )}

      {/* render this component if input change is clicked and has no value */}
    </>
  );
};

export default Search;
