import PrimaryButton from '../Buttons/PrimaryButton';
import './Services.css';
import '../../App.css'

const services = [
  'Medicininis pedikiūras',
  'Deformuotų nagų korekcija',
  'Įaugusių nagų korekcija',
  'Nuospaudų šalinimas',
  'Ortozų gamyba',
  'Nagų grybelio pažeistų nagų priežiūra',
  'Titano siūlas',
  'Ross-Frazer sąsagos',
  'Funkcinis pėdų masažas',
  'Konsultacija',
];

const Services = ({heading, buttontext, data}) => {
  return (
    <div className="services">
      <div className="headingDark">{heading}</div>
      <div className='roundedContainerWrapper fullContainer'>
        {data.map((service, index) => {
            return(
                
                    <div className="service" key={index}>
                        {service.desc}
                    </div>
                
            )
        })}
      
      <PrimaryButton buttontext={buttontext}/>
      </div>
    </div>
  );
};

export default Services;
