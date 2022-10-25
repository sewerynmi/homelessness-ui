import { date } from '@storybook/addon-knobs';
import axios from 'axios';
import Button from 'components/atoms/Button/Button';
import PageTitle from 'components/atoms/PageTitle/PageTitle';
import Heading from 'components/atoms/Typography/Heading';
import Heading3 from 'components/atoms/Typography/Heading3';
import StatTextLarge from 'components/atoms/Typography/StatTextLarge';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const Home = () => {
  // Let's assume that year and locationId is given as param (url or post method)
  let { location, year } = useParams();
  //const year = 2022;
  const locationId = location;

  const API_URL = 'http://localhost:3001/api';
  //const API_URL = 'http://139.162.238.75:3001/api';

  const [locationName, setLocationName] = useState('');
  const [post, setPost] = useState({});

  const [locationResult, setLocationResult] = useState({
    period: 'jan-mar',
    year: new Date().getFullYear(),
    total_init: 0,
    total_oprd: 0,
    threatened: 0,
  });

  const [locationPrevResult, setLocationPrevResult] = useState({
    total_init: 0,
    total_oprd: 0,
    threatened: 0,
    rate: 0,
  });

  const [locationPopulation, setLocationPopulation] = useState(0);
  const [stats, setStats] = useState({ rateOfHomelessInLocation: 0 });
  const [prevPeriod, setPrevPeriod] = useState({ period: 'jan-mar', year: year });

  useEffect(() => {
    axios.get(API_URL + `/homelessness/year/${year}/location/${locationId}`).then((response) => {
      setPost(response.data);
      setLocationResult(response.data.result[0]);
      setLocationPopulation(response.data.result[0].location_population);
      setLocationName(response.data.result[0].location_name);
    });
  }, []);

  useEffect(() => {
    // do some stat calc
    const rate = Math.floor(parseInt(locationPopulation) / parseInt(locationResult.total_init));
    setStats({ ...stats, rateOfHomelessInLocation: rate });
    const prevPeriod = calculatePreviousPeriod(locationResult.period, locationResult.year);
    setPrevPeriod(prevPeriod);

    // Calculate stats considering prev period
    if (post.result) {
      if (post.result[1] !== undefined) {
        const prevResults = post.result[1];
        const ratePrev = Math.floor(
          parseInt(locationPopulation) / parseInt(prevResults.total_init),
        );
        console.log(prevResults);
      }
    }
  }, [post]);

  /* Calculate previous period */
  const calculatePreviousPeriod = (curPeriod, curYear) => {
    let prevPeriod = { period: '', year: curYear };
    const periods = ['jan-mar', 'apr-jun', 'jul-sept', 'oct-dec'];
    let curPeriodId = periods.findIndex((cp) => cp == curPeriod);

    if (curPeriodId == 0) {
      prevPeriod.period = periods[3];
      prevPeriod.year = curYear - 1;
    } else {
      prevPeriod.period = periods[curPeriodId - 1];
    }
    return prevPeriod;
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="full-width">
          <Heading>Welcome to the data hub</Heading>
          <p>
            Data hub is where you can access statistics on categories such as homelessness,
            temporary accommodation and more. The data hub collates a wide range of datasets to
            present accurate insights that can be compared to other regions, previous years,
            mationally or by local authority.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="one-half">
          <Heading3>
            <b>Headline statistics</b>
          </Heading3>
          <p>
            Homelessness in <span className="underscore">{locationName}</span> in <b>{year}</b> with
            total population of <b>{numberWithCommas(locationPopulation)}</b> <br />
            Data for period: <b>{locationResult.period}</b> , <b>{year}</b>
          </p>
          <p>Total initial assessments</p>
          <StatTextLarge>{numberWithCommas(locationResult.total_init)}</StatTextLarge>
          <p>Total owed a prevention or relief duty</p>
          <StatTextLarge>{numberWithCommas(locationResult.total_oprd)}</StatTextLarge>

          <p>Threatened with homelessness within 56 days</p>
          <StatTextLarge>{numberWithCommas(locationResult.threatened)}</StatTextLarge>

          <p>Rate of people who are homeless</p>
          <StatTextLarge>
            1 in {numberWithCommas(parseInt(stats.rateOfHomelessInLocation))}
          </StatTextLarge>

          <p>
            View more stats for {locationName}, specific regions or local authorities on the{' '}
            <span className="underscore">Homelessness</span> page.
          </p>
        </div>

        <div className="one-half-last">
          <Heading3>
            <b>Most visited</b>
          </Heading3>

          <ul className="link-box">
            <li>
              <a href="#">Homelessness</a>
            </li>
            <li>
              <a href="#">Reasons for becoming homeless</a>
            </li>
            <li>
              <a href="#">Housing benefit</a>
            </li>
            <li>
              <a href="#">How to upload data</a>
            </li>
          </ul>

          <Heading3>
            <b>Recently updated</b>
          </Heading3>
          <p>
            <span className="underscore">
              Total households in temporary accommodation in {locationName} in {year}
            </span>
            <br /> <small className="ib p10">updated 20 september 2022</small>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
