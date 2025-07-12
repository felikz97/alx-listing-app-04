import React from 'react';
import {BookingForm} from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  return (
    <div className="container mx-auto p-6 space-y-12">
      {/* Main Section: Form & Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BookingForm />
        <OrderSummary bookingDetails={bookingDetails} />
      </div>

      {/* Cancellation Policy */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Cancellation Policy</h2>
        <p className="text-sm text-gray-600">
          Guests can cancel up to 5 days before check-in for a full refund. If cancelled
          within 5 days of check-in, the first night and service fee are non-refundable.
        </p>
      </div>

      {/* Ground Rules */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Ground Rules</h2>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          <li>No smoking inside the property</li>
          <li>No pets allowed</li>
          <li>Quiet hours from 10 PM to 7 AM</li>
          <li>No parties or events</li>
        </ul>
      </div>
    </div>
  );
}
