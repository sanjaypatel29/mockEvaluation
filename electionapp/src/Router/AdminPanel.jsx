import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '50px'
  },
  paper: {
    padding: '10px',
    width: '100%'
  },
  control: {
    padding: theme.spacing(2)
  },
  link: {
    textDecoration: 'none'
  },
  button: {
    margin: '10px'
  }
}));

export default function AdminPanel(props) {
  const { user } = useSelector((state) => state.app);
  console.log(user.admin.city);

  const city = user.admin.city;
  const classes = useStyles();
  const [data, setData] = useState([]);



  useEffect(
    () => {
      axios
        .get(`http://localhost:5000/getcityLists?city=${city}`)
        .then((res) => setData(res.data.data))
        .catch((error) => {
          console.log(error);
        });
    },
    [city]
  );

  console.log(data, data[0]);
  return (
    <>
      <div className="row d-flex flex-column">
        <h1>City Detail</h1>
        <div className="mx-auto justify-content-center">
          {data.length !== 0 ? (
            <div className="border border-primary">
              <div className="row d-flex mx-auto ">
                <h3 className="flex-1 ml-5">City:{data[0].district}</h3>
                <h3 className="flex-1 ml-5">Population:{data[0].population}</h3>
                <h3 className="flex-1 ml-5">type:{data[0].type}</h3>
                <h3 className="flex-1 ml-5">No. of Polls:{data[0].polls.length}</h3>
              </div>
              <hr />
              <h3>All Polls Detail</h3>
              {data.length > 0 ? (
                data[0].polls.map((a) => (
                  <div>
                    <h5>name:{a.name}</h5>
                    <h5>address:{a.address}</h5>
                    <h5>pincode:{a.pincode}</h5>
                    <hr />
                  </div>
                ))
              ) : null}
            </div>
          ) : null}
        </div>

        <Link to={'/'} className={classes.link}>
          <Button variant="contained" color="dark">
            Go Back
                </Button>
        </Link>

      </div>
    </>
  );
}
