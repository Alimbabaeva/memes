import React from "react";
import "./VoteCard.css";

export default class VoteCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      voteCount: 0
    };
  }
  render() {
    const {meme}=this.props
    console.log(this.props.meme);
    return (
      <div className="vote-card">
        <div>
          {this.props.children}
          <img src={meme.url} alt="meme" class="meme-img" />
          <p>{meme.name}</p>
          <button onClick={()=>({this.setState(prevState=>{voteCount:prevState.voteCount+1
          }))
        }
          >Vote</button>
        </div>
        <p>Vote Count:{this.state.voteCount}</p>
      </div>
    );
  }
}
