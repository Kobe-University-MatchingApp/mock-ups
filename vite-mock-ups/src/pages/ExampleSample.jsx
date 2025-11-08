import { HomeIcon, Navigation } from '../ui'

/**
 * Example Sample Template
 * 
 * 新しいExampleページを作成する手順:
 * 1. このファイルをコピーして、Example4.jsx、Example5.jsx などにリネーム
 * 2. 関数名を ExampleN に変更（例: Example4, Example5）
 * 3. タイトルとコンテンツを変更
 * 4. Navigation の prevLink と nextLink を適切に設定
 * 5. App.jsx に新しいルートを追加
 * 6. Home.jsx に新しいボタンを追加
 */

function ExampleSample() {
    return (
        <div>
            <HomeIcon />

            <div className="p-8 text-center">
                <h1 className="text-3xl font-bold mb-4">Example N</h1>
                <p className="text-lg">This is the Nth example page.</p>

                {/* ここにあなたのコンテンツを追加 */}
                <div className="mt-8">
                    {/* サンプルコンテンツ */}
                </div>
            </div>

            {/* prevLink: 前のページへのパス, nextLink: 次のページへのパス */}
            <Navigation prevLink="/example-prev" nextLink="/example-next" />
        </div>
    )
}

export default ExampleSample
