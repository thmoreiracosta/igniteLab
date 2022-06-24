import { gql, useMutation, useQuery } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscribe ($name: String!, $email: String! ) {
    createSubscriber(data: {name: $name, email: $email}) {
      id
    }
  }
`

export function Subscribe() {
  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBER_MUTATION);

  async function handleSubcribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      }
    });

    navigate('/event')
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1280px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.7rem] leading-tight">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">ReactJS</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed text-lg">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>



          <div className="max-w-[180px] flex items-center justify-between mt-8">
            <div className="max-w-[180px] flex items-center justify-between">
              <div>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4999 6.00009C15.4999 5.17167 14.8284 4.50009 13.9999 4.50009C13.1715 4.50009 12.4999 5.17167 12.4999 6.00009V6.50012H10C6.96157 6.50012 4.5 8.96169 4.5 12.0001V16.0001V34.0001C4.5 37.0385 6.96157 39.5001 10 39.5001H22C22.8284 39.5001 23.5 38.8285 23.5 38.0001C23.5 37.1717 22.8284 36.5001 22 36.5001H10C8.61843 36.5001 7.5 35.3817 7.5 34.0001V17.5001H36.5V20.0001C36.5 20.8285 37.1716 21.5001 38 21.5001C38.8284 21.5001 39.5 20.8285 39.5 20.0001V16.0001V12.0001C39.5 8.96169 37.0384 6.50012 34 6.50012H31.5V6.00009C31.5 5.17167 30.8284 4.50009 30 4.50009C29.1716 4.50009 28.5 5.17167 28.5 6.00009V6.50012H15.4999V6.00009ZM12.4999 9.50012V10.0001C12.4999 10.8285 13.1715 11.5001 13.9999 11.5001C14.8284 11.5001 15.4999 10.8285 15.4999 10.0001V9.50012H28.5V10.0001C28.5 10.8285 29.1716 11.5001 30 11.5001C30.8284 11.5001 31.5 10.8285 31.5 10.0001V9.50012H34C35.3816 9.50012 36.5 10.6185 36.5 12.0001V14.5001H7.5V12.0001C7.5 10.6185 8.61843 9.50012 10 9.50012H12.4999Z" fill="url(#paint0_linear_81_14)"></path>
                  <circle cx="14.0928" cy="30.0913" r="2.08783" fill="white"></circle>
                  <circle cx="14.0928" cy="22.0009" r="2.08783" fill="white"></circle>
                  <circle cx="21.9222" cy="22.0009" r="2.08783" fill="white"></circle>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M36.3529 25.5253C37.7198 24.1559 39.9359 24.1582 41.3027 25.5249L44.4733 28.6955C44.4736 28.6958 44.4739 28.6961 44.4742 28.6964C45.8437 30.0634 45.8414 32.2795 44.4747 33.6462L35.6467 42.4742C34.9893 43.1316 34.0997 43.4996 33.172 43.4996H28C27.1716 43.4996 26.5 42.828 26.5 41.9996V36.8276C26.5 35.8998 26.868 35.0103 27.5253 34.3529L36.352 25.5263C36.3523 25.526 36.3526 25.5256 36.3529 25.5253ZM39.1813 27.6462C38.9844 27.4492 38.6692 27.4512 38.476 27.6449L29.6467 36.4742C29.552 36.5688 29.5 36.6953 29.5 36.8276V40.4996H33.172C33.3043 40.4996 33.4307 40.4475 33.5253 40.3529L42.3533 31.5249C42.5503 31.3279 42.5483 31.0127 42.3547 30.8196L39.1813 27.6462Z" fill="white"></path>
                  <defs>
                    <linearGradient id="paint0_linear_81_14" x1="9.13421" y1="7.9081" x2="33.6662" y2="27.7424" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#81D8F7"></stop>
                      <stop offset="1" stop-color="#00B37E" stop-opacity="0.2"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="w-[120px] flex items-center justify-between mt-2 ml-2 text-xl p-2">
                De 20 a 26 de junho
              </div>
            </div>

            <div className="w-[640px] flex items-center justify-between ml-8">
              <div>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M23.9999 7.4997C14.8869 7.4997 7.4993 14.8873 7.4993 24.0003C7.4993 33.1134 14.8869 40.5009 23.9999 40.5009C33.113 40.5009 40.5005 33.1134 40.5005 24.0003C40.5005 23.1722 41.1718 22.5009 41.9999 22.5009C42.828 22.5009 43.4993 23.1722 43.4993 24.0003C43.4993 34.7695 34.7691 43.4997 23.9999 43.4997C13.2307 43.4997 4.50055 34.7695 4.50055 24.0003C4.50055 13.2311 13.2307 4.50095 23.9999 4.50095C24.828 4.50095 25.4993 5.17224 25.4993 6.00032C25.4993 6.8284 24.828 7.4997 23.9999 7.4997Z" fill="url(#paint0_linear_78_7)"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M25.93 17.5559C26.7232 17.7939 27.1733 18.6297 26.9353 19.4229L23.9366 29.4187C23.6986 30.2119 22.8628 30.662 22.0696 30.424C21.2764 30.1861 20.8264 29.3502 21.0643 28.5571L24.0631 18.5612C24.301 17.7681 25.1369 17.318 25.93 17.5559Z" fill="white"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M29.9367 19.9308C30.5222 19.3452 31.4716 19.3452 32.0571 19.9308L35.0558 22.9295C35.6414 23.515 35.6414 24.4644 35.0558 25.0499L32.0571 28.0487C31.4716 28.6342 30.5222 28.6342 29.9367 28.0487C29.3511 27.4632 29.3511 26.5138 29.9367 25.9283L31.8752 23.9897L29.9367 22.0512C29.3511 21.4657 29.3511 20.5163 29.9367 19.9308Z" fill="white"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0629 19.9308C18.6485 20.5164 18.6485 21.4657 18.0629 22.0512L16.1244 23.9898L18.0629 25.9283C18.6485 26.5139 18.6485 27.4632 18.0629 28.0487C17.4774 28.6343 16.528 28.6343 15.9425 28.0487L12.9437 25.05C12.3582 24.4645 12.3582 23.5151 12.9437 22.9296L15.9425 19.9308C16.528 19.3453 17.4774 19.3453 18.0629 19.9308Z" fill="white"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M37.9998 2.50075C38.8279 2.50075 39.4992 3.17204 39.4992 4.00012C39.4992 6.48575 41.5142 8.50075 43.9998 8.50075C44.8279 8.50075 45.4992 9.17204 45.4992 10.0001C45.4992 10.8282 44.8279 11.4995 43.9998 11.4995C41.5142 11.4995 39.4992 13.5145 39.4992 16.0001C39.4992 16.8282 38.8279 17.4995 37.9998 17.4995C37.1718 17.4995 36.5005 16.8282 36.5005 16.0001C36.5005 13.5145 34.4855 11.4995 31.9998 11.4995C31.1718 11.4995 30.5005 10.8282 30.5005 10.0001C30.5005 9.17204 31.1718 8.50075 31.9998 8.50075C34.4855 8.50075 36.5005 6.48575 36.5005 4.00012C36.5005 3.17204 37.1718 2.50075 37.9998 2.50075ZM37.9998 8.49981C37.5731 9.0679 37.0676 9.57341 36.4995 10.0001C37.0676 10.4268 37.5731 10.9323 37.9998 11.5004C38.4265 10.9323 38.9321 10.4268 39.5001 10.0001C38.9321 9.57341 38.4265 9.0679 37.9998 8.49981Z" fill="white"></path>
                  <defs>
                    <linearGradient id="paint0_linear_78_7" x1="12.2608" y1="39.2609" x2="38.2174" y2="11.087" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#81D8F7"></stop>
                      <stop offset="1" stop-color="#00B37E" stop-opacity="0.2"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="w-[200px] flex items-center justify-between mt-2 ml-2 text-xl p-2">
                Evento inédito, online e gratuito
              </div>
            </div>
          </div>


          <div className="w-full max-w-[1280px] mt-2 block" >
            <p className="mb-4 mt-8 text-[17px]">
              Evento ministrado por:
            </p>
            <div className="flex gap-4 mt-6">
              <div>
                <a href="https://github.com/thmoreiracosta" target="_blank">
                  <img
                    className="h-16 w-16 rounded-full border-2 border-blue-500 leading-relaxed"
                    src="https://www.github.com/thmoreiracosta.png"
                    alt="Foto perfil professor Thiago Costa"
                  />
                </a>
              </div>
              <div className="m-1">
                <h5
                  className="font-sans  text-[20px] block">
                  Thiago Costa
                </h5>
                <span
                  className="text-gray-200 text-[16px] block ">
                  @thmoreiracosta - FullStack Developer
                </span>
              </div>

            </div>

          </div>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
          <form onSubmit={handleSubcribe} className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo..."
              onChange={event => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Seu melhor e-mail..."
              onChange={event => setEmail(event.target.value)}
            />
            <button
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              type="submit"
              disabled={loading}
            >
              Garantir minha vaga
            </button>
          </form>
        </div>




      </div>


      <div className="absolute ">
        <img src="/src/assets/react-icon.svg" alt="" />
      </div>



      <img src="/src/assets/code-mokup.png" className="mt-0" alt="" />      
    </div>
  )
}