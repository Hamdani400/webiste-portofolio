import React, { Component } from 'react'

import Header from 'parts/Header';
import ExperienceCard from 'parts/ExperienceCard';

import ExperienceJson from 'json/Experience.json'

export default class ExperiencePage extends Component {
    render() {
        return (
            <>
                <Header {...this.props} />
                <ExperienceCard {...this.props} data={ExperienceJson.experience} />
            </>
        )
    }
}
