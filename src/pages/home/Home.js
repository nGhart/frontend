import ChartBox from '../../components/chartbox/ChartBox';
import './home.scss';

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="box box1">
        <ChartBox />
      </div>
      <div className="box box2">2</div>
      <div className="box box3">3</div>
      <div className="box box4">4</div>
      <div className="box box5">5</div>
      <div className="box box6">6</div>
      <div className="box box7">7</div>
    </div>
  );
};

export default Home;
