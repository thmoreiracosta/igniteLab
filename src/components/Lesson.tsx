import { NavLink, useParams } from 'react-router-dom';
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CheckCircle, Lock } from 'phosphor-react';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    " EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  )

  const { slug } = useParams<{ slug: string }>();
  const isActiveLesson = slug === props.slug;

  return (
    <>
      {isLessonAvailable ? (
        <NavLink to={`/event/lesson/${props.slug}`} className="group">
          <span className="text-gray-300 hover:text-gray-200">
            {availableDateFormatted}
          </span>
          <div className={`rounded border border-gray-500 p-4 mt-2          
          ${isActiveLesson ? 'bg-green-500 relative before:absolute before:content before:bg-green-500 before:p-2 before:rotate-45 before:top-[50%] before:left-[-8px]' : ''}          
          ${!isLessonAvailable ? 'cursor-not-allowed' : 'group-hover:bg-gray-500 group-hover:border-green-500 transition-colors'}
          `}>
            <header className="flex items-center justify-between">
              <span className={`text-sm text-blue-500 font-medium flex items-center gap-2 ${isActiveLesson ? 'text-white' : ''}`}>
                <CheckCircle size={20} />
                Conteúdo liberado
              </span>
              <span className={`text-xs rounded py-[.25rem] px-2 text-white border border-green-300 font-bold ${isActiveLesson ? 'border-white' : ''}  ${!isLessonAvailable ? 'cursor-not-allowed' : ''}`}>
                {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
              </span>
            </header>
            <strong className={`text-gray-200 mt-5 block ${isActiveLesson ? 'text-slate-50' : ''} ${!isLessonAvailable ? 'cursor-not-allowed' : ''}`}>
              {props.title}
            </strong>
          </div>
        </NavLink>
      ) : (

        <span className="text-gray-300 hover:text-gray-200">
          {availableDateFormatted}
          <div className="cursor-not-allowed rounded-md border border-gray-500 mb-6 mt-2 hover:not:border-green-500 focus:outline-none opacity-30">
            <a href="#" className="pointer-events-none">
              <div className="p-4">
                <header className="flex items-center justify-between">
                  <span className={`text-sm text-orange-500 font-medium flex items-center gap-2 cursor-not-allowed ${!isLessonAvailable ? 'cursor-not-allowed' : ''}`}>
                    <Lock size={20} />
                    Em breve
                  </span>
                  <span className="text-xs rounded py-[.125rem] px-2 text-white border border-green-300">
                    {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                  </span>
                </header>
                <strong className="text-gray-200 text-left mt-5 block">
                  {props.title}
                </strong>
              </div>
            </a>
          </div>
        </span>

      )}
    </>
  )
}