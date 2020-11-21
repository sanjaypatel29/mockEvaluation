import React from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import { CardSummary } from "../Component/CardSummary";


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city_data: []
        }
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/getallcityLists", {
            })
            .then((res) => {
                console.log(res.city_data)
                this.setState({
                    city_data: res.data
                })
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        const { city_data } = this.state
        //  console.log(city_data)
        return (
            <>
                <div>
                    <div>
                        <h1 className="mb-4">List of cities</h1>
                        {city_data &&
                            city_data.map((item, index) => (
                                <Grid key={index} city_data={item} style={{ marginLeft: "40%" }}>
                                    <Grid container spacing={3}>
                                        <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                                            <CardSummary city={item.city} district={item.district} population={item.population} type={item.type} polls={item.polls} data={city_data} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            ))
                        }
                    </div>
                </div >
            </>
        );
    }
}

export default Home;
