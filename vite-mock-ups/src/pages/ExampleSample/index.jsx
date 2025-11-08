import { ExampleHeader, PhoneFrame, ExampleFooter } from '../../ui'
import PhoneContent from './PhoneContent'

/**
 * Example Sample Template
 * 
 * 新しいExampleページを作成する手順:
 * 1. このフォルダ全体をコピーして、Example4、Example5 などにリネーム
 * 2. index.jsx の関数名を ExampleN に変更（例: Example4, Example5）
 * 3. ExampleHeader の title と description を変更
 * 4. ExampleFooter の prevLink と nextLink を適切に設定
 * 5. PhoneContent.jsx にあなたのコンテンツを追加
 * 6. App.jsx に新しいルートを追加
 * 7. Home.jsx に新しいボタンを追加
 */

function ExampleSample() {
    return (
        <div className="w-full h-[90vh] overflow-hidden flex flex-col">
            <ExampleHeader
                title="Example N"
                description="This is the Nth example page."
            />

            <PhoneFrame>
                <PhoneContent />
            </PhoneFrame>

            <ExampleFooter
                prevLink="/example-prev"
                nextLink="/example-next"
            />
        </div>
    )
}

export default ExampleSample
