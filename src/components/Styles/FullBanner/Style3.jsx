import React from "react";

const Style3 = ({ data }) => {
  return (
    <section
      class="ptb-60"
      style={{
        background: `url('assets/img/payment-step.jpg')no-repeat center
    center / cover`,
      }}
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="text-center mb-5">
              <h2 class="text-white mb-3">Just Few Steps to Start</h2>
              <p class="text-off-white">
                Access your account via your mobile phone. View balance,
                transfer funds, view transactions wherever you are Login with
                fingerprint or Face ID..
              </p>
            </div>
          </div>
        </div>
        <div class="row mb--150">
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="single-payment-step bg-white p-4 mb-4 mb-lg-0">
              <img src="assets/img/pi-1.png" alt="icon" />
              <h6 class="mt-3">Register for Free</h6>
              <p class="mb-0">
                Simply sign up online for free and verify your identity.
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="single-payment-step bg-white p-4 mb-4 mb-lg-0">
              <img src="assets/img/pi-2.png" alt="icon" />
              <h6 class="mt-3">Set up your Transfer</h6>
              <p class="mb-0">
                Add a recipient's details and choose which currency ...
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="single-payment-step bg-white p-4 mb-4 mb-lg-0">
              <img src="assets/img/pi-3.png" alt="icon" />
              <h6 class="mt-3">Make your Payment</h6>
              <p class="mb-0">
                Send us your funds with a bank transfer and we'll notify..
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="single-payment-step bg-white p-4 mb-4 mb-lg-0">
              <img src="assets/img/pi-4.png" alt="icon" />
              <h6 class="mt-3">Enjoy your Service</h6>
              <p class="mb-0">
                We inform you when the money has been sent and can also ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style3;
