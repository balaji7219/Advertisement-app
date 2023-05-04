import React, { useEffect, useState, useRef } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "./Adv.css";
import "../App.css";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Carousel from "react-bootstrap/Carousel";

const Adv = () => {
  const [cardData, setCardData] = useState();
  const [isShown, setIsShown] = useState(false);
  const [isAudioShow, setIsAudioShown] = useState(false);
  const [isBannerShow, setIsBannerShows] = useState(false);
  const [activeId, setActiveId] = useState();
  const [isVideoShow, setIsVideoShown] = useState(false);
  const [isLeadShow, setIsLeadShown] = useState(false);
  const [isProductShow, setIsProductShown] = useState(false);
  const [isBanShow, setIsBanShow] = useState(false);
  const ReqHeader = {
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
  };

  const advCard = async () => {
    try {
      let stateApi = await axios.post(
        "http://192.168.29.23:8000/api/getCampaignType",
        ReqHeader
      );
      let response = stateApi.data.data;
      setCardData(response);
    } catch (errror) {
      return errror;
    }
  };

  useEffect(() => {
    advCard();
  }, []);

  const onClickHandler = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    setActiveId(parseInt(e.target.id));
    const id = e.target.id;
    id == 7 ? setIsShown(e.target.id) : setIsShown(false);
    id == 8 ? setIsAudioShown(e.target.id) : setIsAudioShown(false);
    id == 3 ? setIsBannerShows(e.target.id) : setIsBannerShows(false);
    id == 6 ? setIsVideoShown(e.target.id) : setIsVideoShown(false);
    id == 1 ? setIsLeadShown(e.target.id) : setIsLeadShown(false);
    id == 4 ? setIsProductShown(e.target.id) : setIsProductShown(false);
    id == 2 ? setIsBanShow(e.target.id) : setIsBanShow(false);
  };

  return (
    <>
      <h4 className="justify-content-center text-center mt-4">
        Select Your Campaign_Type:-
      </h4>
      <Container className="AdsContainer">
        {cardData === [] || cardData === undefined ? (
          <></>
        ) : (
          <Row className="d-flex flex-wrap">
            {cardData.map((cardObj, cardIndex) => {
              return (
                <Col
                  md={4}
                  lg={4}
                  sm={4}
                  key={cardIndex}
                  id={cardObj.id}
                  onClick={onClickHandler}
                  className={`${
                    cardObj.status === 1 ? "d-block" : "d-none"
                  } mb-4 card-col`}
                >
                  <Card
                    className={`${
                      cardObj.id === activeId ? "activecard" : "inactivecard"
                    } p-3`}
                    id={cardObj.id}
                  >
                    <Row id={cardObj.id}>
                      <Col id={cardObj.id} lg={2} sm={3} md={3}>
                        <div
                          id={cardObj.id}
                          style={{ stroke: "white" }}
                          dangerouslySetInnerHTML={{
                            __html: cardObj.icon,
                          }}
                        />
                      </Col>

                      <Col id={cardObj.id}>
                        <Card.Title
                          id={cardObj.id}
                          className="py-1 align-items-center text-white mb-3 mt-0"
                        >
                          {cardObj.campaign_type}
                        </Card.Title>
                        <Card.Subtitle
                          id={cardObj.id}
                          className="text-justify justify-content-center"
                        >
                          {cardObj.description}
                        </Card.Subtitle>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              );
            })}
          </Row>
        )}

        <Container className="mt-4">{isShown && <Story />}</Container>
        <Container className="mt-4">{isAudioShow && <AudioAds />}</Container>
        <Container className="mt-4">{isBannerShow && <BannerAds />}</Container>
        <Container className="mt-4">{isVideoShow && <VideAds />}</Container>
        <Container className="mt-4">{isLeadShow && <LeadAds />}</Container>
        <Container className="mt-4">
          {isProductShow && <ProductAds />}
        </Container>

        <Container className="mt-4"> {isBanShow && <BanAds />}</Container>
      </Container>
    </>
  );
};
export default Adv;

const Story = () => {
  const [key, setKey] = useState("");
  const [seed, setSeed] = useState(1);

  const reset = () => {
    setSeed(Math.random());
  };
  return (
    <>
      <Container
        className="border border-dark "
        style={{ backgroundColor: "#F0F0F0" }}
      >
        <div className="col-lg-12 col-md-12 col-sm-12 ">
          <div className="align-items-center mb-30 row">
            <div className="col-lg-4">
              <div className="card-header mb-3">
                <h4 className="sub-title mb-2">
                  Which kind of story ads you wanna do?
                </h4>
              </div>
            </div>

            <Tabs
              key={seed}
              className=" mb-3 "
              style={{ backgroundColor: "#faf0e6" }}
              activeKey={key}
              id="controlled-tab"
              onSelect={(key) => setKey(key)}
              variant="pills"
              onClick={reset}
            >
              <Tab eventKey="Video" title="Video">
                {<Vide />}
              </Tab>
              <Tab eventKey="Image" title="Image">
                {<Imagee />}
              </Tab>
              <Tab eventKey="Lead" title="Lead">
                {<Leade />}
              </Tab>
            </Tabs>
          </div>
        </div>
      </Container>
    </>
  );
};

export { Story };

const AudioAds = () => {
  const [key, setKey] = useState("");
  const [seed, setSeed] = useState(1);

  const reset = () => {
    setSeed(Math.random());
  };
  return (
    <>
      <Container
        className="border border-dark "
        style={{ backgroundColor: "#fffafa" }}
      >
        <div className="col-lg-12 col-md-12 col-sm-12 ">
          <div className="align-items-center mb-30 row">
            <div className="col-lg-4">
              <div className="card-header mb-3">
                <h4 className="sub-title mb-2">Audio ads?</h4>
              </div>
            </div>

            <Tabs
              key={seed}
              className=" mb-3 "
              style={{ backgroundColor: "#F7F5EB" }}
              activeKey={key}
              id="controlled-tab"
              onSelect={(key) => setKey(key)}
              variant="pills"
              onClick={reset}
            >
              <Tab eventKey="Audio" title="Audio">
                {<Audio />}
              </Tab>
            </Tabs>
          </div>
        </div>
      </Container>
    </>
  );
};
export { AudioAds };

const Vide = () => {
  const [videoPreview, setVideoPreview] = useState();

  const filePicekerRef = useRef();

  function previewFile(e) {
    const reader = new FileReader();

    const selectedFile = e.currentTarget.files[0];
    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    } else {
    }

    reader.onload = (readerEvent) => {
      if (selectedFile.type.includes("video")) {
        setVideoPreview(readerEvent.currentTarget.result);
      }
    };
  }

  // function clearFiles() {
  //   setVideoPreview(null);

  // }

  return (
    <Container className=" mb-2 ">
      <h3 className=" col-lg-3  border border-dark p-2">
        video Advertisement-
      </h3>

      <div>
        <input
          ref={filePicekerRef}
          accept="image/*, video/*"
          onChange={previewFile}
          type="file"
          hidden
        />

        <Button
          className="p-2 m-2"
          onClick={() => filePicekerRef.current.click()}
          variant="outline-dark"
        >
          select
        </Button>
        {/* {videoPreview && (
          <Button onClick={clearFiles} variant="outline-dark">
            delete
          </Button>
        )} */}
      </div>
      <div className="preview border-info mb-2 ">
        {videoPreview != null && (
          <video ref={filePicekerRef} width="425" height="240" controls>
            <source src={videoPreview} />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </Container>
  );
};

export { Vide };

const VideAds = () => {
  const [key, setKey] = useState("");
  const [seed, setSeed] = useState(1);

  const reset = () => {
    setSeed(Math.random());
  };
  return (
    <Container className="border border-dark " style={{ backgroundColor: "" }}>
      <div className="col-lg-12 col-md-12 col-sm-12 ">
        <div className="align-items-center mb-30 row">
          <div className="col-lg-4">
            <div className="card-header mb-3">
              <h4 className="sub-title mb-2">
                Which kind of story ads you wanna do?
              </h4>
            </div>
          </div>

          <Tabs
            key={seed}
            className=" mb-3 "
            style={{ backgroundColor: "#faf0e6" }}
            activeKey={key}
            id="controlled-tab"
            onSelect={(key) => setKey(key)}
            variant="pills"
            onClick={reset}
          >
            <Tab eventKey="Video" title="Video">
              {<Vide />}
            </Tab>
          </Tabs>
        </div>
      </div>
    </Container>
  );
};

export { VideAds };

const Leade = () => {
  const [imageFiles, setImageFiles] = useState([]);
  const [images, setImages] = useState([]);
  const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;

  const changeHandler = (e) => {
    const { files } = e.target;
    const validImageFiles = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.match(imageTypeRegex)) {
        validImageFiles.push(file);
      }
    }
    if (validImageFiles.length) {
      setImageFiles(validImageFiles);
      return;
    }
    alert("Selected images are not of valid type!");
  };

  useEffect(() => {
    const fileReaders = [];
    let isCancel = false;
    if (imageFiles.length) {
      const promises = imageFiles.map((file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReaders.push(fileReader);
          fileReader.onload = (e) => {
            const { result } = e.target;
            if (result) {
              resolve(result);
            }
          };
          fileReader.onabort = () => {
            reject(new Error("File reading aborted"));
          };
          fileReader.onerror = () => {
            reject(new Error("Failed to read file"));
          };
          fileReader.readAsDataURL(file);
        });
      });
      Promise.all(promises)
        .then((images) => {
          if (!isCancel) {
            setImages(images);
          }
        })
        .catch((reason) => {
          console.log(reason);
        });
    }
    return () => {
      isCancel = true;
      fileReaders.forEach((fileReader) => {
        if (fileReader.readyState === 1) {
          fileReader.abort();
        }
      });
    };
  }, [imageFiles]);

  return (
    <Container className=" mb-2">
      <form>
        <p>
          <label type="file">Upload-LeadImages</label>

          <h4 className=" col-lg-3  border border-dark p-2">
            {" "}
            Lead Advertisement :-
          </h4>

          <input
            value={""}
            type="file"
            id="file"
            // onClick={reset}
            onChange={changeHandler}
            accept=",audio/*,gif/*,video/mp4,video/x-m4v,video/*"
            multiple
          />
        </p>
      </form>
      {images.length > 0 ? (
        <div>
          {images.map((image, idx) => {
            return (
              <p key={idx}>
                {" "}
                <img src={image} width="350" height="300" alt="" />{" "}
              </p>
            );
          })}
        </div>
      ) : null}
      <Container>
        <div class="col-md-6 m-4">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="headline"
              name="headline"
              maxlength="32"
              minlength="6"
              value=""
            />
            <label for="headline">Title / Header</label>
          </div>
        </div>
        <div class="col-md-6 m-4">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="description"
              name="description"
              minlength="8"
              maxlength="72"
              value=""
            />
            <label for="description">Description</label>
          </div>
        </div>
      </Container>

      <Container className="">
        <div className="mt-4 ">
          <div className="col-md-12">
            <div className="card-header mb-2">
              <h4 className="sub-title mb-0">
                What information do you want to ask for?
              </h4>
            </div>
            <ul className="ui-checkbox d-flex gap-2">
              <li>
                <div className="form-check">
                  <input
                    type="checkbox"
                    name="lead_name"
                    id="lead_name"
                    className="form-check-input lead_genaration_check"
                  />
                  <label className="form-check-label" for="lead_name">
                    Name
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    type="checkbox"
                    name="lead_email"
                    id="lead_email"
                    className="form-check-input lead_genaration_check"
                  />
                  <label className="form-check-label" for="lead_email">
                    Email
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    type="checkbox"
                    name="lead_phone"
                    id="lead_phone"
                    className="form-check-input lead_genaration_check"
                  />
                  <label className="form-check-label" for="lead_phone">
                    Contact
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    type="checkbox"
                    name="lead_gender"
                    id="lead_gender"
                    className="form-check-input lead_genaration_check"
                    value=""
                  />
                  <label className="form-check-label" for="lead_gender">
                    Gender
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    type="checkbox"
                    name="lead_dob"
                    id="lead_dob"
                    className="form-check-input lead_genaration_check"
                    value=""
                  />
                  <label className="form-check-label" for="lead_dob">
                    Date Of Birth
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    type="checkbox"
                    name="lead_address"
                    id="lead_address"
                    className="form-check-input lead_genaration_check"
                    value=""
                  />
                  <label className="form-check-label" for="lead_address">
                    Address
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    type="checkbox"
                    name="lead_pincode"
                    id="lead_pincode"
                    className="form-check-input lead_genaration_check"
                    value=""
                  />
                  <label className="form-check-label" for="lead_pincode">
                    Pincode
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <div class="m-4 row">
        <div class="col-md-12">
          <div class="card-header mb-2">
            <h4 class="sub-title mb-0"> Call to Action (CTA)</h4>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="button_text"
              name="button_text"
              maxlength="15"
              minlength="4"
              value=""
            />
            <label for="button_text">Button Name</label>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { Leade };

const LeadAds = () => {
  const [key, setKey] = useState("");
  const [seed, setSeed] = useState(1);

  const reset = () => {
    setSeed(Math.random());
  };
  return (
    <Container className="border border-dark " style={{ backgroundColor: "" }}>
      <div className="col-lg-12 col-md-12 col-sm-12 ">
        <div className="align-items-center mb-30 row">
          <div className="col-lg-4">
            <div className="card-header mb-3">
              <h4 className="sub-title mb-2">
                Which kind of story ads you wanna do?
              </h4>
            </div>
          </div>

          <Tabs
            key={seed}
            className=" mb-3 "
            style={{ backgroundColor: "#faf0e6" }}
            activeKey={key}
            id="controlled-tab"
            onSelect={(key) => setKey(key)}
            variant="pills"
            onClick={reset}
          >
            <Tab eventKey="Video" title="Lead">
              {<Leade />}
            </Tab>
          </Tabs>
        </div>
      </div>
    </Container>
  );
};

export { LeadAds };

const Imagee = () => {
  const [imageFiles, setImageFiles] = useState([]);
  const [images, setImages] = useState([]);
  const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;

  const changeHandler = (e) => {
    const { files } = e.target;
    const validImageFiles = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.match(imageTypeRegex)) {
        validImageFiles.push(file);
      }
    }
    if (validImageFiles.length) {
      setImageFiles(validImageFiles);
      return;
    }
    alert("Selected images are not of valid type!");
  };

  useEffect(() => {
    const fileReaders = [];
    let isCancel = false;
    if (imageFiles.length) {
      const promises = imageFiles.map((file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReaders.push(fileReader);
          fileReader.onload = (e) => {
            const { result } = e.target;
            if (result) {
              resolve(result);
            }
          };
          fileReader.onabort = () => {
            reject(new Error("File reading aborted"));
          };
          fileReader.onerror = () => {
            reject(new Error("Failed to read file"));
          };
          fileReader.readAsDataURL(file);
        });
      });
      Promise.all(promises)
        .then((images) => {
          if (!isCancel) {
            setImages(images);
          }
        })
        .catch((reason) => {
          console.log(reason);
        });
    }
    return () => {
      isCancel = true;
      fileReaders.forEach((fileReader) => {
        if (fileReader.readyState === 1) {
          fileReader.abort();
        }
      });
    };
  }, [imageFiles]);

  return (
    <Container className=" mb-2 ">
      <div>
        <form>
          <label type="file">Upload images</label>

          <h4 className=" col-lg-3 border border-dark p-2">
            {" "}
            Image Advertisement :-
          </h4>

          <input
            className="mb-4"
            value={""}
            type="file"
            id="file"
            onChange={changeHandler}
            accept="image/png, image/jpg, image/jpeg "
          />
        </form>
        {images.length > 0 ? (
          <div>
            {images.map((image, idx) => {
              return (
                <div key={idx}>
                  {" "}
                  <img src={image} width="350" height="300" alt="" />{" "}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className=" mt-sm-4 px-md-0 px-sm-0 mt-lg-0 px-lg-4   col-lg-6 col-md-12 col-sm-12">
        <div className="form-floating mb-3 row">
          <input
            type="text"
            className="form-control"
            id="story_image_text"
            name="story_image_text"
          />

          <label type="story_image_text">Description (Optional)</label>
          <span className="text-danger fw-600 campign_err"></span>
        </div>
        <div className="form-floating mb-3 row">
          <input
            type="text"
            className="form-control"
            id="story_image_button"
            name="story_image_button"
          />
          <label type="story_image_button">Button Name (Optional)</label>
          <span className="text-danger fw-600 campign_err"></span>
        </div>
        <div className="form-floating mb-3 row">
          <input
            type="url"
            className="form-control form-floating"
            id="story_image_url"
            name="story_image_url"
            pattern="https://.*"
          />
          <label type="story_image_url">Redirect URL (Optional)</label>
          <span className="text-danger fw-600 campign_err"></span>
        </div>
      </div>
    </Container>
  );
};

export { Imagee };

const Audio = () => {
  const [buttonName, setButtonName] = useState("Play");
  const [audio, setAudio] = useState();

  var a;

  if (audio) {
    a = new Audio(audio);
  }

  const handleClick = () => {
    if (buttonName === "Play") {
      a.play();
      setButtonName("Pause");
    } else {
      a.pause();
      setButtonName("Play");
    }
  };

  const addFile = (e) => {
    const s = URL.createObjectURL(e.target.files[0]);
    setAudio(s);
  };

  return (
    <div className="row">
      <div className="col-lg-8 col-md-12 col-sm-12 d-flex">
        <div className="audio_div col-4 p-2">
          <div className="d-flex text-center align-items-center px-2">
            <img src="http://192.168.29.2:8000/front_img/icon/audio.svg" />
            <input
              className="custom-file-audio-input hidden"
              name="audio_file"
              id="audio_file"
              type="file"
              accept="audio/*"
              onChange={addFile}
            />
          </div>
        </div>
        <Button
          className="p-2 m-2"
          onClick={handleClick}
          variant="outline-dark"
          size="md"
        >
          Play
        </Button>
      </div>
    </div>
  );
};

export { Audio };

const Banner = () => {
  // const [cImage, setCImage] = useState();
  // const filePicekerRef = useRef();

  // function previewFile(e) {
  //   const reader = new FileReader();

  //   const selectedFile = e.currentTarget.files[0];
  //   if (selectedFile) {
  //     reader.readAsDataURL(selectedFile);
  //   } else {
  //   }

  //   reader.onload = (readerEvent) => {
  //     if (selectedFile.type.includes("video")) {
  //       setCImage(readerEvent.currentTarget.result);
  //     }
  //   };
  // }

  return (
    <>
      <Carousel style={{ marginBottom: "20px" }}>
        <Carousel.Item>
          <img
            style={{ height: "300px" }}
            className="d-block w-100"
            src={"assets/img/img2.jpg"}
            alt="First slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "300px" }}
            className="d-block w-100"
            src={"assets/img/img1.jpg"}
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "300px" }}
            className="d-block w-100"
            src={"assets/img/img4.jpg"}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export { Banner };

const BannerAds = () => {
  const [key, setKey] = useState("");
  const [seed, setSeed] = useState(1);

  const reset = () => {
    setSeed(Math.random());
  };
  return (
    <>
      <Container
        className="border border-dark "
        style={{ backgroundColor: "" }}
      >
        <div className="col-lg-12 col-md-12 col-sm-12 ">
          <div className="align-items-center mb-30 row">
            <div className="col-lg-4">
              <div className="card-header mb-3">
                <h4 className="sub-title mb-2">
                  Which kind of story Banner Ads you wanna do?
                </h4>
              </div>
            </div>

            <Tabs
              key={seed}
              className=" mb-3 "
              style={{ backgroundColor: "#faf0e6" }}
              activeKey={key}
              id="controlled-tab"
              onSelect={(key) => setKey(key)}
              variant="pills"
              onClick={reset}
            >
              <Tab eventKey="Video" title="Image-Slider">
                {<Banner />}
              </Tab>
            </Tabs>
          </div>
        </div>
      </Container>
    </>
  );
};
export { BannerAds };

const Product = () => {
  return (
    <Container className="d-flex justify-content-center gap-5">
      <Card style={{ width: "15rem" }}>
        <Card.Img
          variant="top"
          style={{ width: "100%", aspectRatio: 1 }}
          src={"assets/img/img6.jpg"}
        />
        <Card.Body>
          <Card.Title>
            Product Name <span style={{ color: "gray" }}> Price-$10</span>
          </Card.Title>

          <Card.description>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.description>
          <Button
            onClick={() => {
              alert("Order Accepted !");
            }}
            variant="outline-dark"
            size="md"
          >
            Buy
          </Button>
          <Button
            onClick={() => {
              alert("Add to Cart!");
            }}
            className="m-4 text-dark"
            variant="outline-info"
            size="md"
          >
            Add Cart
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "15rem" }}>
        <Card.Img
          variant="top"
          style={{ width: "100%", aspectRatio: 1 }}
          src={"assets/img/img8.jpg"}
        />
        <Card.Body>
          <Card.Title>
            Product name <span style={{ color: "gray" }}> Price-$12</span>
          </Card.Title>

          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button
            onClick={() => {
              alert("Order Accepted !");
            }}
            variant="outline-dark"
            size="md"
          >
            Buy
          </Button>
          <Button
            onClick={() => {
              alert("Add to Cart!");
            }}
            className="m-4 text-dark"
            variant="outline-info"
            size="md"
          >
            Add Cart
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "15rem" }}>
        <Card.Img
          variant="top"
          style={{ width: "100%", aspectRatio: 1 }}
          src={"assets/img/img7.jpg"}
        />
        <Card.Body>
          <Card.Title>
            Product Name <span style={{ color: "gray" }}> Price-$15</span>
          </Card.Title>

          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button
            onClick={() => {
              alert("Order Accepted !");
            }}
            variant="outline-dark"
            size="md"
          >
            Buy
          </Button>
          <Button
            onClick={() => {
              alert("Add to Cart!");
            }}
            className="m-4 text-dark"
            variant="outline-info"
            size="md"
          >
            Add Cart
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};
export { Product };

const ProductAds = () => {
  const [key, setKey] = useState("");
  const [seed, setSeed] = useState(1);

  const reset = () => {
    setSeed(Math.random());
  };
  return (
    <>
      <Container
        className="border border-dark "
        style={{ backgroundColor: "" }}
      >
        <div className="col-lg-12 col-md-12 col-sm-12 ">
          <div className="align-items-center mb-30 row">
            <div className="col-lg-4">
              <div className="card-header mb-3">
                <h4 className="sub-title mb-2">
                  Which kind of story ads you wanna do?
                </h4>
              </div>
            </div>

            <Tabs
              key={seed}
              className=" mb-3 "
              style={{ backgroundColor: "#faf0e6" }}
              activeKey={key}
              id="controlled-tab"
              onSelect={(key) => setKey(key)}
              variant="pills"
              onClick={reset}
            >
              <Tab eventKey="Video" title="Product">
                {<Product />}
              </Tab>
            </Tabs>
          </div>
        </div>
      </Container>
    </>
  );
};
export { ProductAds };

const Ban = () => {
  const [imageFiles, setImageFiles] = useState([]);
  const [images, setImages] = useState([]);
  const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;

  const changeHandler = (e) => {
    const { files } = e.target;
    const validImageFiles = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.match(imageTypeRegex)) {
        validImageFiles.push(file);
      }
    }
    if (validImageFiles.length) {
      setImageFiles(validImageFiles);
      return;
    }
    alert("Selected images are not of valid type!");
  };

  useEffect(() => {
    const fileReaders = [];
    let isCancel = false;
    if (imageFiles.length) {
      const promises = imageFiles.map((file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReaders.push(fileReader);
          fileReader.onload = (e) => {
            const { result } = e.target;
            if (result) {
              resolve(result);
            }
          };
          fileReader.onabort = () => {
            reject(new Error("File reading aborted"));
          };
          fileReader.onerror = () => {
            reject(new Error("Failed to read file"));
          };
          fileReader.readAsDataURL(file);
        });
      });
      Promise.all(promises)
        .then((images) => {
          if (!isCancel) {
            setImages(images);
          }
        })
        .catch((reason) => {
          console.log(reason);
        });
    }
    return () => {
      isCancel = true;
      fileReaders.forEach((fileReader) => {
        if (fileReader.readyState === 1) {
          fileReader.abort();
        }
      });
    };
  }, [imageFiles]);

  return (
    <Container className=" mb-2">
      <form>
        <p>
          <label type="file">Upload-Banner</label>

          <h4 className=" col-lg-3  border border-dark p-2">
            {" "}
            Banner Advertisement :-
          </h4>

          <input
            value={""}
            type="file"
            id="file"
            // onClick={reset}
            onChange={changeHandler}
            accept=",audio/*,gif/*,video/mp4,video/x-m4v,video/*"
            multiple
          />
        </p>
      </form>
      {images.length > 0 ? (
        <div>
          {images.map((image, idx) => {
            return (
              <p key={idx}>
                {" "}
                <img src={image} width="350" height="300" alt="" />{" "}
              </p>
            );
          })}
        </div>
      ) : null}
    </Container>
  );
};

export { Ban };

const BanAds = () => {
  const [key, setKey] = useState("");
  const [seed, setSeed] = useState(1);

  const reset = () => {
    setSeed(Math.random());
  };
  return (
    <>
      <Container
        className="border border-dark "
        style={{ backgroundColor: "" }}
      >
        <div className="col-lg-12 col-md-12 col-sm-12 ">
          <div className="align-items-center mb-30 row">
            <div className="col-lg-4">
              <div className="card-header mb-3">
                <h4 className="sub-title mb-2">BannerAds</h4>
              </div>
            </div>

            <Tabs
              key={seed}
              className=" mb-3 "
              style={{ backgroundColor: "#faf0e6" }}
              activeKey={key}
              id="controlled-tab"
              onSelect={(key) => setKey(key)}
              variant="pills"
              onClick={reset}
            >
              <Tab eventKey="Audio" title="Banner">
                {<Ban />}
              </Tab>
            </Tabs>
          </div>
        </div>
      </Container>
    </>
  );
};

export { BanAds };
