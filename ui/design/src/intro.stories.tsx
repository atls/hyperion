import type { Meta }     from '@storybook/react'
import type { StoryObj } from '@storybook/react'

import { Image }         from '@atls-ui-parts/image'
import { Column }        from '@atls-ui-parts/layout'
import { Row }           from '@atls-ui-parts/layout'
import { Layout }        from '@atls-ui-parts/layout'
import { Link }          from '@atls-ui-parts/link'
import { Text }          from '@atls-ui-parts/text'

const meta: Meta = {
  title: 'Hyperion',
  render: () => (
    <Column fill maxWidth='800px' marginX='auto'>
      <Image
        alt='Hyperion UI kit'
        width='100%'
        height='auto'
        src='https://user-images.githubusercontent.com/102182195/234979948-62106953-55d8-4d7f-8b2f-09fad882d8d2.png'
      />
      <Layout flexBasis='24px' />
      <Text fontSize='$large' fontWeight='$bold' lineHeight='$extraMedium' color='$text.black'>
        Hyperion UI-Kit
      </Text>
      <Layout flexBasis='24px' />
      <Text fontSize='$medium' lineHeight='$extraMedium' color='$text.black'>
        Hyperion – это модульный фронтенд-фреймворк для создания современных веб-приложений на React
        с поддержкой TypeScript, содержащий компоненты и стили, которые упрощают и ускоряют процесс
        разработки.
      </Text>
      <Layout flexBasis='16px' />
      <Text fontSize='$regular' fontWeight='$bold' lineHeight='$extraMedium' color='$text.black'>
        Принципы
      </Text>
      <Layout flexBasis='16px' />
      <Text fontSize='$medium' lineHeight='$extraMedium' color='$text.black'>
        Hyperion построен на принципах модульности и разделения ответственности, что позволяет
        быстро создавать новые приложения, а также легко поддерживать и расширять уже существующие.
        Он включает в себя множество компонентов, которые позволяют быстро создавать
        пользовательские интерфейсы, а также инструменты для управления стилями и сборки проекта.
      </Text>
      <Layout flexBasis='16px' />
      <Text fontSize='$regular' fontWeight='$bold' lineHeight='$extraMedium' color='$text.black'>
        А ещё
      </Text>
      <Layout flexBasis='16px' />
      <Text fontSize='$medium' lineHeight='$extraMedium' color='$text.black'>
        Для удобства использования библиотеки, мы создали интерактивный сайт, где вы можете
        ознакомиться с примерами компонентов и их кодом. Сайт также позволяет собрать свою
        собственную версию Hyperion с выбранными компонентами.
      </Text>
      <Layout flexBasis='16px' />
      <Text fontSize='$medium' fontWeight='$bold' lineHeight='$extraMedium' color='$text.black'>
        Полезные ссылки
      </Text>
      <Layout flexBasis='16px' />
      <Row gap='16px'>
        <Link href='https://ui.atls.design'>
          <Text fontSize='$medium' lineHeight='$extraMedium' color='$text.lightBlue'>
            📕 StoryBook
          </Text>
        </Link>
        <Link href='https://github.com/atls/hyperion/wiki'>
          <Text fontSize='$medium' lineHeight='$extraMedium' color='$text.lightBlue'>
            📑 Документация
          </Text>
        </Link>
        <Link href='https://github.com/atls/hyperion/issues/new?assignees=TorinAsakura&labels=bug&template=bug.yaml'>
          <Text fontSize='$medium' lineHeight='$extraMedium' color='$text.lightBlue'>
            🐛 Report bug
          </Text>
        </Link>
      </Row>
    </Column>
  ),
}

export default meta

export const Hyperion: StoryObj = {
  name: 'Hyperion UI-Kit',
}
