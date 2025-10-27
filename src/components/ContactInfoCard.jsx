import { MapPin, Mail, Phone } from 'lucide-react';

export default function ContactInfoCard() {
  return (
    <div className="max-w-md mx-auto  p-6  ">
      <div className=" border-2 border-dark-blue rounded-3xl p-6 space-y-8">
        
        {/* Address Section */}
        <div className="flex items-start gap-4">
          <div className="shrink-0">
            <MapPin className="w-10 h-10 text-dark-blue" strokeWidth={2}  />
          </div>
          <div>
            <p className="text-dark-blue font-semibold text-base ">
              Shop No.5, GC, Grand Street, Vaibhav Khand, Indirapuram, Ghaziabad, Uttar Pradesh 201014
            </p>
          </div>
        </div>

        {/* Email Section */}
        <div className="flex items-start gap-4">
          <div className="shrink-0">
            <Mail className="w-10 h-10 text-dark-blue" strokeWidth={2} />
          </div>
          <div>
            <p className="text-dark-blue font-semibold text-base mt-2">
              Email - <a href="mailto:info@walknoodles.com" className="hover:underline">info@walknoodles.com</a>
            </p>
          </div>
        </div>

        {/* Phone Section */}
        <div className="flex items-start gap-4">
          <div className="shrink-0">
            <Phone className="w-10 h-10 text-dark-blue" strokeWidth={2} />
          </div>
          <div>
            <p className="text-dark-blue font-semibold text-base">
              Only Messages - <a href="tel:+918448277676" className="hover:underline">+91 8448277676</a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}