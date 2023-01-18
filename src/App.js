import React from "react";
import "./styles.css";
import VoteCard from "./components/VoteCard";
import memes from "./memes.json";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      memes
    };
  }
  render() {
    const { memes } = this.state.memes.data.memes;

    return (
      <div className="App">
        {memes.map((meme) => (
          <VoteCard key={meme.id} meme={meme} />
        ))}
      </div>
    );
  }
}
export default App;
