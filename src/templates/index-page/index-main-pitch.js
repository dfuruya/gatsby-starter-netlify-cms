import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby'

import Features from '../../components/Features'
import BlogRoll from '../../components/BlogRoll'

function parseParagraphs(paragraph) {
    const key = Date.now();
    return paragraph.split('\n').map((line, i) => <p key={key + i}>{line}</p>)
}

const IndexMainPitch = ({
    mainpitch,
    intro,
    heading,
}) => {
    return (
        <div className="w-64">
            {/* Main pitch */}
            <div className="columns">
                <div className="column is-two-thirds">
                    <div className="content">
                        <div className="tile">
                            <h1 className="title">{mainpitch.title}</h1>
                        </div>
                        <div className="tile">
                            <h3 className="subtitle">
                                {parseParagraphs(mainpitch.description)}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_1_1561390992158_5098">
                        <div className="sqs-block-content">
                            <p className="" style={{ whiteSpace: "pre-wrap" }}><strong>Contact Us</strong></p>
                            <p className="" style={{ whiteSpace: "pre-wrap" }}>123 Demo Street<br />Taipei, Taiwan</p>
                            <p className="" style={{ whiteSpace: "pre-wrap" }}>email@example.com<br />(555) 555-5555</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blurbs */}
            <div className="columns">
                <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                    </h3>
                </div>
            </div>
            <Features gridItems={intro.blurbs} />
            <div className="columns">
                <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                        See all products
                    </Link>
                </div>
            </div>

            {/* Latest stories */}
            <div className="column is-12">
                <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                </h3>
                <BlogRoll />
                <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    )
}

// IndexMainPitch.propTypes = {
//     someObjc: PropTypes.object,
//     someNumb: PropTypes.number,
//     someBool: PropTypes.bool,
//     someArry: PropTypes.array,
//     someFunc: PropTypes.func.isRequired,
//     children: PropTypes.node,
// };

export default IndexMainPitch
