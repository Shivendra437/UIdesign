import React from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Footer() {
  const [focus1, setFocus1] = React.useState(false)
  const [focus2, setFocus2] = React.useState(false)
  return (
    <section>
      <div className="our_metrics_container">
        <div className="our_metrics">
          <div className="metrics_header">
            <h2>Write better, faster, and clearer instantly</h2>
          </div>
          <div className="metrics_subheader">
            <p>
              QuillBot is trusted by students, professional writers, and
              business people who want to write more effectively.
            </p>
          </div>
        </div>

        <div className="val_container">
          <div className="assets_container">
            <div className="assests_item1">
              <div className="assests_val">
                <VisibilitySensor
                  partialVisibility
                  onChange={(isVisible) => {
                    if (isVisible === true) {
                      setFocus1(true)
                    }
                  }}
                >
                  <CountUp
                    start={focus1 ? 0 : null}
                    end={focus1 ? 10000 : 0}
                    duration={focus1 ? 4 : 0}
                    useEasing={true}
                    separator=","
                    decimals={0}
                    decimal=","
                  />
                </VisibilitySensor>
              </div>
              <div className="sub_heading">Average time savings per writing project.</div>
            </div>

            <div className="assests_item2">
              <div className="assests_val">
                <CountUp
                  start={focus1 ? 0 : null}
                  end={focus1 ? 10000 : 0}
                  duration={focus1 ? 4 : 0}
                  useEasing={true}
                  separator=","
                  decimals={0}
                  decimal=","
                  prefix="$ "
                />
              </div>
              <div className="sub_heading">Trusted by millions worldwide.</div>
            </div>

            <div className="assests_item3">
              <div className="assests_val">
                <VisibilitySensor
                  onChange={(isVisible) => {
                    if (isVisible) {
                      setFocus2(true)
                    }
                  }}
                >
                  <CountUp
                    id="count2"
                    start={focus2 ? 0 : null}
                    end={focus2 ? 3000 : 0}
                    duration={focus2 ? 3 : 0}
                    useEasing={true}
                    separator=","
                    decimals={0}
                    decimal=","
                    prefix="$ "
                  />
                </VisibilitySensor>
              </div>

              <div className="sub_heading">Who reported their grades improved after using QuillBot.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
