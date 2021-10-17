import React, { FC } from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MainLayout from '@/components/main-layout';

import MarkerImg from '@/static/images/icon-map-pic.png';

const accessToken =
  process.env.MAP_BOX_TOKEN ||
  'pk.eyJ1IjoiYXJ0dGVtcGxhdGUiLCJhIjoiY2s0M3I5ZHgzMGEzNDNucXM1cDd0dzl3cSJ9.a2wjLlxz8LzWj9nIoGsshw';
const Map = ReactMapboxGl({
  accessToken,
});

const Contact: FC = () => {
  return (
    <MainLayout>
      <div className="pb-2">
        <h1 className="title title--h1 first-title title__separate">Contact</h1>
      </div>
      {/* Contact */}
      {/* <div className="map" id="map" /> */}
      <Map
        zoom={[13]}
        center={[106.72364, 10.74176]}
        className="map"
        style="mapbox://styles/mapbox/light-v10"
      >
        <Marker coordinates={[106.72364, 10.74176]} anchor="bottom">
          <img width={40} src={MarkerImg} />
        </Marker>
      </Map>
      <h2 className="title title--h3">Contact Form</h2>
      <form id="contact-form" className="contact-form" data-toggle="validator">
        <div>
          <div className="form-group">
            <i className="far fa-user font-icon" />
            <input
              type="text"
              className="input input__icon form-control"
              id="nameContact"
              name="nameContact"
              placeholder="Full name"
              required
              autoComplete="on"
              // oninvalid="setCustomValidity('Fill in the field')"
              // onKeyUp="setCustomValidity('')"
            />
            <div className="help-block with-errors" />
          </div>
          <div className="form-group">
            <i className="font-icon far fa-envelope" />
            <input
              type="email"
              className="input input__icon form-control"
              id="emailContact"
              name="emailContact"
              placeholder="Email address"
              required
              autoComplete="on"
              // oninvalid="setCustomValidity('Email is incorrect')"
              // onKeyUp="setCustomValidity('')"
            />
            <div className="help-block with-errors" />
          </div>
          <div className="form-group">
            <textarea
              className="textarea form-control"
              id="messageContact"
              name="messageContact"
              placeholder="Your Message"
              rows={4}
              required
              // oninvalid="setCustomValidity('Fill in the field')"
              // onKeyUp="setCustomValidity('')"
              defaultValue={''}
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        <div>
          <div
            className="
                order-2 order-md-1
                text-center text-md-left
              "
          >
            <div id="validator-contact" className="hidden" />
          </div>
          <div className="text-right">
            <button type="submit" className="btn">
              <i className="font-icon icon-send" /> Send Message
            </button>
          </div>
        </div>
      </form>
    </MainLayout>
  );
};

export default Contact;
