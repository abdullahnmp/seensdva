export default function BusinessHours() {
    return (
      <div className="p-8 rounded-2xl bg-gray-50">
        <h2 className="text-2xl font-space-grotesk font-bold mb-6">Business Hours</h2>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Monday - Friday</span>
            <span className="font-bold">9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Saturday</span>
            <span className="font-bold">10:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Sunday</span>
            <span className="font-bold">Closed</span>
          </div>
        </div>
      </div>
    );
  }