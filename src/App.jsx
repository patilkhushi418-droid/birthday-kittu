import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState(1);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const audioRef = useRef(null);

 const photos = [
  `${import.meta.env.BASE_URL}images/photo1.jpeg`,
  `${import.meta.env.BASE_URL}images/photo2.jpeg`,
  `${import.meta.env.BASE_URL}images/photo3.jpeg`,
  `${import.meta.env.BASE_URL}images/photo4.jpeg`,
  `${import.meta.env.BASE_URL}images/photo5.jpeg`,
  `${import.meta.env.BASE_URL}images/photo6.jpeg`,
  `${import.meta.env.BASE_URL}images/photo7.jpeg`,
  `${import.meta.env.BASE_URL}images/photo8.jpeg`,
];
  const captions = [
    ["first of all...", "Look at you being this cute 🥹🎀"],
    ["just saying...", "How are you this adorable without even trying? ♡"],
    ["this one...", "Okay, this smile deserves a little appreciation. 💗"],
    ["one of my favourites", "Some pictures just make you smile instantly. 🌷"],
    [
      "pretty girl energy",
      "You + KitKat = a love story I could never compete with. 😭🍫🎀",
    ],
    ["almost there...", "Every picture has a different version of you. 🧸"],
    ["one more...", "Just you being you — and honestly, that's enough. 🎀"],
  ];

  const startMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(
        `${import.meta.env.BASE_URL}song.mp3`
      );

      audioRef.current.loop = true;
      audioRef.current.volume = 0.7;
    }

    audioRef.current
      .play()
      .then(() => {
        setIsMusicPlaying(true);
      })
      .catch(() => {
        setIsMusicPlaying(false);
      });

    setPage(2);
  };

  const toggleMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(
        `${import.meta.env.BASE_URL}song.mp3`
      );

      audioRef.current.loop = true;
      audioRef.current.volume = 0.7;
    }

    if (isMusicPlaying) {
      audioRef.current.pause();
      setIsMusicPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsMusicPlaying(true);
        })
        .catch(() => {
          setIsMusicPlaying(false);
        });
    }
  };

  const nextPhoto = () => {
    if (photoIndex < 6) {
      setPhotoIndex(photoIndex + 1);
    } else {
      setPage(5);
    }
  };

  const replay = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setIsMusicPlaying(false);
    setPhotoIndex(0);
    setPage(1);
  };

  return (
    <div className="page">

      {/* Floating decorations */}
      <div className="decorations">
        <span>♡</span>
        <span>✦</span>
        <span>♡</span>
        <span>✧</span>
        <span>♡</span>
        <span>✦</span>
      </div>

      {/* Music button */}
      {page > 1 && (
        <button
          className="music-button"
          onClick={toggleMusic}
          aria-label="Toggle music"
        >
          {isMusicPlaying ? "♫" : "♪"}
        </button>
      )}

      {/* PAGE 1 */}
      {page === 1 && (
        <section className="page-one">
          <p className="small-heading">JUST FOR YOU</p>

          <h1>
            here is something
            <br />
            for u ♡
          </h1>

          <div className="little-text">
            <span>♡✦♡</span>
            <p>I hope you like it...</p>
            <span>made with love ♡</span>
          </div>

          <button className="main-button" onClick={startMusic}>
            click here ✨
          </button>
        </section>
      )}

      {/* PAGE 2 */}
      {page === 2 && (
        <section className="page-two">
          <p className="small-heading">A LITTLE MESSAGE FOR YOU</p>

          <h1>Happiest birthday to my cutest Kittu 🥹🎀💗</h1>

          <div className="birthday-message">
            <p>
              I hope your day is filled with lots and lots of happiness,
              laughter and all the little things that make you smile. You
              deserve the happiest days and all the beautiful things life has
              to offer. 🫶🏻✨
            </p>

            <p>
              Keep smiling, keep being your adorable self, and never change!
              🥺💞 Here’s to more memories, more laughs, more bakchodi and
              countless happy moments together. 🎂🌷
            </p>

            <p>
              Happy Birthday once again, Kittu! 🧸🎀💗
            </p>
          </div>

          <button
            className="main-button"
            onClick={() => setPage(3)}
          >
            there's more ♡
          </button>
        </section>
      )}

      {/* PAGE 3 */}
      {page === 3 && (
        <section className="page-three">
          <p className="small-heading">A FEW THINGS I WANNA SAY</p>

          <h1>Just You Being You ♡</h1>

          <p className="transition-text">
            okay... enough of the words.
            <br />
            let's look at you being adorable instead 🥹🎀
          </p>

          <button
            className="main-button"
            onClick={() => setPage(4)}
          >
            show me ♡
          </button>
        </section>
      )}

      {/* PAGE 4 — PHOTO SEQUENCE */}
      {page === 4 && (
        <section className="page-four">

          <div className="photo-progress">
            {photoIndex + 1} / 7
          </div>

          <div className="photo-card">

            <div className="photo-frame">
              <img
                src={photos[photoIndex]}
                alt={`Kittu memory ${photoIndex + 1}`}
              />
            </div>

            <div className="photo-caption">
              <p className="caption-small">
                {captions[photoIndex][0]}
              </p>

              <h2>
                {captions[photoIndex][1]}
              </h2>
            </div>

          </div>

          <button
            className="main-button"
            onClick={nextPhoto}
          >
            {photoIndex === 6 ? "one last thing ♡" : "next ♡"}
          </button>

        </section>
      )}

      {/* PAGE 5 — FINAL PHOTO + MESSAGE */}
      {page === 5 && (
        <section className="page-five">

          <p className="small-heading">okay... one last thing</p>

          <div className="final-photo-card">
            <img
              src={photos[7]}
              alt="Kittu special memory"
            />
          </div>

          <h1>And this one deserves a special place. 🥹🎀</h1>

          <p className="final-message">
            Because after all the pictures, all the memories and all the
            bakchodi...
            <br />
            you're still just my cutest Kittu. 🧸💗
          </p>

          <p className="final-birthday">
            Happiest Birthday once again! 🎂🎀
          </p>

          <div className="final-collage">
            {photos.map((photo, index) => (
              <div
                className="collage-photo"
                key={photo}
              >
                <img
                  src={photo}
                  alt={`Memory ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <p className="ending-text">
            made with a little bit of love, lots of memories &lt;3
          </p>

          <button
            className="main-button"
            onClick={replay}
          >
            replay ♡
          </button>

        </section>
      )}

    </div>
  );
}

export default App;