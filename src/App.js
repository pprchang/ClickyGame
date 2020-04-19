import React from 'react';
import FixHeader from './components/Header';
import ImageCard from './components/ImageCard';
import Wrapper from './components/Wrapper';
import images from './images.json';
import BodyTitle from './components/BodyTitle';
import BodyFooter from './components/BodyFooter';

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends React.Component {
  // Setting this.state.friends to the friends json array
  state = {
    images,
    direction: 'Click on an image to begin!',
    score: 0,
    topScore: 0,
    clickedimage: [],
  };

  clicked = (id) => {
    // assigning states
    let score = this.state.score;
    let topScore = this.state.topScore;
    let clickedimage = this.state.clickedimage;

    if (clickedimage.indexOf(id) === -1) {
      // push that id into clickedimage array
      clickedimage.push(id);

      // call handleIncrement function which increment score
      this.handleIncrement();
      // call shuffleImage function after each click to shuffle the images
      this.shuffleImages();
    } else if (this.state.score === 12) {
      // let player know they win the game once score reached 12, reset score and reset clickedimage array
      this.setState({
        direction: 'You have won the game!',
        score: 0,
        clickedimage: [],
      });
    } else {
      // let player know they lose because same image was selected twice, reset score and reset clickedimage array
      this.setState({
        direction: 'You selected the same image twice!',
        score: 0,
        clickedimage: [],
      });
    }

    //set topScore to score if score is greater than topScore
    if (score > topScore) {
      this.setState({
        topScore: score,
      });
    }
  };

  //function to increment score by 1 and change message
  handleIncrement = () => {
    // setState updates a components states
    this.setState({
      score: this.state.score + 1,
      direction: 'Great job! Select again!',
    });
  };

  // function to shuffle images
  shuffleImages = () => {
    this.setState({ images: shuffle(images) });
  };

  render() {
    return (
      <div>
        <FixHeader
          title='Clicky Game'
          direction={this.state.direction}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <BodyTitle title='Clicky Game' />
        <Wrapper>
          {this.state.images.map((image) => (
            <ImageCard
              id={image.id}
              key={image.id}
              name={image.name}
              image={image.image}
              clicked={this.clicked}
            />
          ))}
        </Wrapper>
        <BodyFooter />
      </div>
    );
  }
}

export default App;
