'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
const Editor = dynamic(() => import('@tinymce/tinymce-react').then(mod => mod.Editor), {
  ssr: false,
});

export default function Home() {
  const [editorContent, setEditorContent] = useState('');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true); // Убедитесь, что TinyMCE загружается только на клиенте.
  }, []);

  const handleCopy = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(editorContent).then(() => {
        alert('Контент скопирован в буфер обмена');
      }).catch((error) => {
        console.error('Копирование не удалось: ', error);
      });
    } else {
      // Устаревший метод
      const textarea = document.createElement('textarea');
      textarea.value = editorContent;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        alert('Контент скопирован в буфер обмена');
      } catch (error) {
        console.error('Копирование не удалось: ', error);
      }
      document.body.removeChild(textarea);
    }
  };

  if (!isReady) {
    return <p>Loading editor...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-items-center mt-24 p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-7xl mx-auto sm:px-6 lg:px-8 h-full">
        <Editor
          apiKey='yi3sx9msdxosib6dph792cnf45px219mts569e5dfayqmle9'
          init={{
            language: 'ru',
            plugins: [
              // Core editing features
              'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',

            ],
            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
          }}
          initialValue="Введите текст сюда"
          onEditorChange={(content) => setEditorContent(content)}
        />
        <div className="output w-full">
          <div className="flex items-center justify-between w-full mb-4">
          <h2>Перевод в HTML:</h2>
          <button
            className="mt-4 px-4 py-2 bg-accent text-white rounded-md hover:bg-lightblue"
            onClick={handleCopy}
          >
            Скопировать в буфер
          </button>
          </div>
          
          <textarea
            className="w-full min-h-28 p-2 border border-gray-300 rounded-md text-black"
            value={editorContent}
            readOnly
          />
        </div>
      </main>
    </div>
  );
}
