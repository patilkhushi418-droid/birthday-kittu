import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState(1);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const audioRef = useRef(null);

  const photos = [
    "/images/photo1.jpeg",
    "/images/photo2.jpeg",
    "/images/photo3.jpeg",
    "/images/photo4.jpeg",
    "/images/photo5.jpeg",
    "/images/photo6.jpeg",
    "/images/photo7.jpeg",
    "/images/photo8.jpeg",
  ];

  const captions = [
   
  ["first of all...", "Look at you being this cute 🥹🎀"],
  ["just saying...", "How are you this adorable without even trying? ♡"],
  ["this one...", "Okay, this smile deserves a little appreciation. 💗"],
  ["one of my favourites", "Some pictures just make you smile instantly. 🌷"],
  ["pretty girl energy", "You + KitKat = a love story I could never compete with. 😭🍫🎀"],
  ["almost there...", "Every picture has a different version of you. 🧸"],
  ["one more...", "Just you being you — and honestly, that's enough. 🎀"],

  ];

  const startMusic = async () => {
    try {
      await audioRef.current.play();
      setMusicPlaying(true);
    } catch (error) {
      console.log(error);
    }

    setPage(2);
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (musicPlaying) {
      audioRef.current.pause();
      setMusicPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setMusicPlaying(true);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const nextPage = () => {
    setPage((current) => current + 1);
  };

  const nextPhoto = () => {
    if (photoIndex < 6) {
      setPhotoIndex((current) => current + 1);
    } else {
      setPage(5);
    }
  };

  const replay = () => {
    setPhotoIndex(0);
    setPage(1);
  };

  return (
    <div className="app">

      <audio ref={audioRef} loop>
        <source src="/song.mp3" type="audio/mpeg" />
      </audio>

      {page > 1 && (
        <button className="music-button" onClick={toggleMusic}>
          {musicPlaying ? "♫" : "♪"}
        </button>
      )}

      {/* PAGE 1 */}

      {page === 1 && (
        <main className="page page-one">

          <div className="floating floating-one">♡</div>
          <div className="floating floating-two">✦</div>
          <div className="floating floating-three">♡</div>

          <div className="intro-content">

            <p className="eyebrow">just for you</p>

            <h1>
              here is something
              <br />
              for u <span>♡</span>
            </h1>

            <p className="intro-subtitle">
              I hope you like it...
            </p>

            <button className="main-button" onClick={startMusic}>
              click here ✨
            </button>

          </div>

          <div className="bottom-note">
            made with love ♡
          </div>

        </main>
      )}

      {/* PAGE 2 */}

      {page === 2 && (
        <main className="page page-two">

          <div className="birthday-wrapper">

            <p className="eyebrow">
              today is all about you ♡
            </p>

            <h1>
              Happiest birthday to
              <br />
              my cutest Kittu 🥹🎀💗
            </h1>

            <div className="divider">♡</div>

            <div className="birthday-message">

              <p>
                I hope your day is filled with lots and lots of
                happiness, laughter and all the little things that
                make you smile. You deserve the happiest days and
                all the beautiful things life has to offer. 🫶🏻✨
              </p>

              <p>
                Keep smiling, keep being your adorable self, and
                never change! 🥺💞 Here’s to more memories, more
                laughs, more bakchodi and countless happy moments
                together. 🎂🌷
              </p>

              <p>
                Happy Birthday once again, Kittu! 🧸🎀💗
              </p>

            </div>

            <button className="main-button" onClick={nextPage}>
              but wait... ♡
            </button>

          </div>

        </main>
      )}

      {/* PAGE 3 */}

      {page === 3 && (
        <main className="page page-three">

          <div className="transition-content">

            <div className="big-sparkle">✦</div>

            <p className="eyebrow">
              because one message wasn't enough
            </p>

            <h1>
              I made a little
              <br />
              something else <span>♡</span>
            </h1>

            <p className="transition-text">
              A few pictures.
              <br />
              A few thoughts.
              <br />
              And a lot of love.
            </p>

            <button className="main-button" onClick={() => setPage(4)}>
              show me ♡
            </button>

          </div>

        </main>
      )}

      {/* PAGE 4 */}

      {page === 4 && (
        <main className="page page-four">

          <div className="memory-section">

            <div className="memory-header">

              <p className="eyebrow">
                a little collection
              </p>

              <h1>
                Just You Being You ♡
              </h1>

              <div className="progress">
                <span>
                  {String(photoIndex + 1).padStart(2, "0")}
                </span>

                <div className="progress-line">
                  <div
                    style={{
                      width: `${((photoIndex + 1) / 7) * 100}%`,
                    }}
                  />
                </div>

                <span>07</span>
              </div>

            </div>

            <div className="photo-area" onClick={nextPhoto}>

              <div className={`photo-card photo-card-${photoIndex % 4}`}>

                <div className="photo-number">
                  {String(photoIndex + 1).padStart(2, "0")}
                </div>

                <img
                  src={photos[photoIndex]}
                  alt="Birthday memory"
                />

              </div>

              <div className="caption-area">

                <p className="caption-small">
                  {captions[photoIndex][0]}
                </p>

                <h2>
                  {captions[photoIndex][1]}
                </h2>

                <div className="tap-next">
                  tap the photo →
                </div>

              </div>

            </div>

          </div>

        </main>
      )}

      {/* PAGE 5 */}

      {page === 5 && (
        <main className="page page-five">

          <div className="final-wrapper">

            <p className="eyebrow">
              okay... one last thing ♡
            </p>

            <h1 className="final-title">
              Happy Birthday,
              <br />
              Kittu 🎀
            </h1>

            <div className="final-photo-wrapper">

              <div className="final-photo">
                <img
                  src={photos[7]}
                  alt="Kittu"
                />
              </div>

            </div>

            <div className="final-message">

              <p>
                Here’s to another year of you,
                more laughs, more memories,
                more bakchodi and lots and lots
                of happiness. 💗
              </p>

              <p>
                I hope this year brings you everything
                you’re wishing for and so much more.
              </p>

              <strong>
                Stay exactly the way you are. ♡
              </strong>

            </div>

            <div className="final-collage">

              {photos.map((photo, index) => (
                <div
                  className={`collage-photo collage-${index}`}
                  key={index}
                >
                  <img src={photo} alt="" />
                </div>
              ))}

            </div>

            <p className="made-with-love">
              made especially for you ♡
            </p>

            <button className="replay-button" onClick={replay}>
              replay ↻
            </button>

          </div>

        </main>
      )}

    </div>
  );
}

export default App;