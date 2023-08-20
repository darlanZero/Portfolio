import Card from '@/components/Card'
import CollapseButton from '@/components/CollapseButton'

export default function Home() {
  return (
    <>
      <div>
        <h1 className=" font-alt text-5xl transition-colors hover:text-green-950">
          Hello, my name is Darlan Oliveira! Nice to meet you!
        </h1>
      </div>

      <div>
        <Card>
          Hi, actually, i am a web Developer looking to be a Fullstack Developer
          soon. i have 19 years, and i curse Computer Science. I'm actually at
          4º period on University.
        </Card>
      </div>

      <div className='text-center'>
        <h1 className=" font-alt text-5xl transition-colors hover:text-green-950">
          Languages that i know
        </h1>

        <div className="inline-flex content-center items-center gap-4">
          <CollapseButton
            buttonText="Frontend"
            cardText={['- Typescript', ' - HTML', ' - CSS', '- TypeScript']}
          />

          <CollapseButton
            buttonText="Backend"
            cardText={['- PHP', '- Python', '- Java', '- TypeScript', '- C#']}
          />

          <CollapseButton 
            buttonText="Databases"
            cardText={['- MySQL', '- Firebase', '- Prisma', '- H2']}
          />
        </div>

        <Card>
          Also i know frameworks like React & Angular for JavaScript and
          TypeScript, Next for Frontend, Tailwind for CSS, SpringBoot for Java.
        </Card>
      </div>

      <div></div>
    </>
  )
}
