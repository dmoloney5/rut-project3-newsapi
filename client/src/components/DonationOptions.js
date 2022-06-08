import React, { useState } from "react";

function DonationOptions({item, setItem}) {

    return <div class="row g-12">
    <div  className="row g-2">
      <div class="col-md-6">
        <label>
          First Name:
          <input type="text" name="name" />
        </label>
      </div>
      <div class="col-md-6">
        <label>
          Last Name:
          <input type="text" name="name" />
        </label>
      </div>
      <div class="col-12">
        <label>
          Address:
          <input type="text" name="address" />
        </label>
      </div>
      <div class="col-md-6">
        <label>
          City:
          <input type="text" name="city" />
        </label>
      </div>
      <div class="col-md-4">
        <label>
          State:
          <input type="text" name="state" />
        </label>
      </div>
      <div class="col-md-4">
        <label>
          Zip Code:
          <input type="text" name="zip" />
        </label>
      </div>
      <div class="col-md-6">
        <label>
          Email:
          <input type="text" name="email" />
        </label>
      </div>
      <label>
        Please choose a donation $
        <select value={item.price} onChange={(e)=>{setItem({name: "Donation", price: e.target.value})}}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20"> 20</option>
          <option value="50">50</option>
        </select>
      </label>
     
    </div>
    </div>
}
export default DonationOptions;