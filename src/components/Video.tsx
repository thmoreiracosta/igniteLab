// import { Player } from "@vime/react";
import YouTube, { YouTubePlayer } from 'react-youtube';
import { CaretRight, DiscordLogo, FileArrowDown, Image, Lightning } from "phosphor-react";
import { useGetLessonBySlugQuery } from '../graphql/generated';
// import '@vime/core/themes/default.css';

export interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    }
  });

  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
        <p>
          Carregando...
        </p>
      </div>
    )
  }

  const opts = {
    height: '854',
    width: '1280',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1280px] max-h-[60vh] aspect-video">
          {/* <Player> */}
          <YouTube videoId={data.lesson.videoId} opts={opts} />
          {/* </Player> */}
        </div>
      </div>

      <div className="p-8 max-w-[1200px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              {data.lesson.title}
            </h1>
            <p className="mt-4 text-gray-200 text-justify leading-relaxed" >
              {data.lesson.description}
            </p>
            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <a href="https://github.com/thmoreiracosta" target="_blank">
                  <img
                    className="h-16 w-16 rounded-full border-2 border-blue-500"
                    src={data.lesson.teacher.avatarURL}
                    alt="Foto perfil professor Thiago Costa"
                  />
                </a>
                <div className="leading-relaxed">
                  <strong
                    className="font-bold text-2xl block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span
                    className="text-gray-200 text-sm block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4 ">
            <a href="https://discord.com/channels/327861810768117763/786708105861791744"
              target="_blank"
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>
            <a href="https://evento.rocketseat.com.br/ignite-lab/desafios/checkpoints"
              target="_blank"
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-2 ">
          <div className="flex rounded border-1 border-gray-600 hover:border-none transition-colors">
            <a href="https://www.notion.so/Material-complementar-56bc580dd6b14c57910adf092bd2760d"
              target="_blank"
              className="w-full xl:w-auto bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 md:justify-between hover:bg-gray-600 border-2 border-green-500 border-opacity-0
              hover:-translate-y-2 hover:border-opacity-100 transitions-all duration-500 ease-in-out">
              <div className="bg-green-500 h-full p-6 flex items-center ">
                <FileArrowDown size={40} />
              </div>
              <div className="py-6 leading-relaxed">
                <strong className="text-2xl">
                  Material complementar
                </strong>
                <p className="text-sm text-grey-200 mt-2">
                  Acesse o material complementar para acelerar o seu desenvolvimento
                </p>
              </div>
              <div className="h-full p-6 flex items-center text-blue-500">
                <CaretRight size={24} />
              </div>
            </a>
          </div>
          <div className="flex rounded border-1 border-gray-600 hover:border-none transition-colors">
            <a href="https://drive.google.com/drive/folders/1sdwmycoqhO-otxj7LmcPxIim_16XXXkH?usp=sharing"
              target="_blank"
              className="w-full xl:w-auto bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 md:justify-between hover:bg-gray-600 border-2 border-green-500 border-opacity-0
              hover:-translate-y-2 hover:border-opacity-100 transitions-all duration-500 ease-in-out">
              <div className="bg-green-500 h-full p-6 flex items-center ">
                <Image size={40} />
              </div>
              <div className="py-6 leading-relaxed">
                <strong className="text-2xl">
                  Wallpapers
                </strong>
                <p className="text-sm text-grey-200 mt-2">
                  Baixe wallpapers exclusivos do Ignite Lab e personalize a sua m??quina
                </p>
              </div>
              <div className="h-full p-6 flex items-center text-blue-500">
                <CaretRight size={24} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}