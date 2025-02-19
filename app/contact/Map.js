export default function Map() {
    return (
      <div className="h-[300px] rounded-2xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.1996558077708!2d115.15365!3d-8.678078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2470cff8bb93f%3A0xaa667df8830090ee!2sW%20Bali%20-%20Seminyak!5e0!3m2!1sen!2sid!4v1735125287717!5m2!1sen!2sid"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl"
          style={{ border: '0px' }}
        ></iframe>
      </div>
    );
  }