export default function Blob (){
   return(<main>
      <div style={{display: 'flex', gap: '1.8rem'}}>
         <h2>JS Blob</h2>
         <div style={{position: 'relative'}}>
            <img src="/images/main.jpg" alt="main image"
                 style={{width: '120px', height: '60px'}}/>
            <a href="https://www.heropy.dev/p/QlwiuS"
               style={{position: 'absolute', top:'30%', left:'4px', color:'white'}}>참조 url
               입니다.</a>
         </div>
      </div>
      <p>JavaScript에서 Blob(Binary Large Object, 블랍)은 이미지, 사운드, 비디오와 같은 멀티미디어 데이터를 다룰 때 사용할 수 있습니다. 대개 데이터의 크기(Byte) 및
         MIME 타입을 알아내거나, 데이터를 송수신을 위한 작은 Blob 객체로 나누는 등의 작업에 사용합니다.
         이 글에서는 Blob의 생성과 읽고 쓰는 방법들에 대해서 알아보겠습니다.</p>
      <pb>File 객체도 name과 lastModifiedDate 속성이 존재하는 Blob 객체입니다</pb>
      <section>
         <p>Blob 생성자는 Blob 객체를 반환; 생성시 인수로 array와 options을 받음</p>
         <code>const newBlob = new Blob(array, options)</code>
         <h3>array</h3>
         <p>Blob 생성자의 첫번째 인수로 ArrayBuffer, ArrayBufferView, Blob(File), DOMString 객체 또는 이러한 객체가 혼합된 Array를 사용할 수
            있습니다.</p>
   <code>{`new Blob([new ArrayBuffer(data)], {type: 'video/mp4'});
   new Blob( new Uint8Array(data), {type: 'image/png'} );
   new Blob(['<div>Hello Blob!</div>'], {type: 'text/html', endings: 'native'} ); `}</code>
         <h3>options</h3>
         <p>옵션으로는 type과 endings를 설정할 수 있습니다.</p>
         <ul>
            <li>type: 데이터의 MIME 타입을 설정하며, 기본값은 "" 입니다.</li>
            <li>endings: \n을 포함하는 문자열 처리를 "transparent"와 "native"로 지정할 수 있으며, 기본값은 "transparent"입니다.</li>
         </ul>
      </section>
      <section>
         <h3>Blob 객체</h3>
         <h4>properties</h4>
         <p>생성자를 통해 만들어진 Blob 객체는 size, type의 속성을 가집니다.
            size는 Blob 객체의 바이트(Byte) 단위 크기를 의미하며, type은 객체의 MIME 타입을 의미합니다.
            MIME 타입을 알 수 없는 경우 빈 문자열("")이 할당됩니다.</p>
         <h4>Methods</h4>
         <p>Blob 객체에서 사용할 수 있는 slice 메소드는 지정된 바이트 범위의 데이터를 포함하는 새로운 Blob 객체를 만드는 데 사용됩니다.<br/>
            10MB 이상 사이즈가 큰 Blob 객체를 작게 조각내어 사용할 때 유용합니다.</p>
         <code>const blob = new Blob() // New blob object
            blob.slice(start, end, type)</code>
         <p>start는 시작 범위(Byte, Number), end는 종료 범위(Byte, Number), type은 새로운 Blob 객체의 MIME 타입(String)을 지정합니다.</p>
<code>{`// Blob 객체(blob)에서 첫 1KB의 JPG Blob 객체(chunk)를 생성
   const chunk = blob.slice(0, 1024, 'image/jpeg')`}</code>
         <p>다음 예제는 위에서 살펴본 Blob 객체(약 43KB의 PNG 이미지로 생성한)를 10개의 Chunk로 조각냅니다.
            그리고 각 Chunk를 chunks 배열에 순서대로 저장합니다.</p>
   <code>{`const chunks = []
   const numberOfSlices = 10
   const chunkSize = Math.ceil(blob.size / numberOfSlices)
   for (let i = 0; i < numberOfSlices; i += 1) {
   const startByte = chunkSize * i
   chunks.push( blob.slice( startByte, startByte + chunkSize, blob.type ) )
}
   console.log(chunks) // This is as follows..</code>
   <p>이렇게 조각낸 Blob 객체들(Chunks)은 필요에 의해 간단하게 다시 합칠 수 있습니다. </p>
   <code>const mergedBlob = new Blob( chunks, {type: blob.type} );
   document.getElementById('merged-image').src = window.URL.createObjectURL(mergedBlob);
   document.getElementById('chunk-image').src = window.URL.createObjectURL(chunk[0]);

   // Revoke Blob URL..`}</code>
      </section>
      <section>
         <h3>Blob URL</h3>
         <p>Blob 객체를 가리키는 URL을 생성을 위해 URL 객체의 정적 메소드(Static Method)로 createObjectURL과 revokeObjectURL를 사용할 수 있습니다.</p>
         <h4>createObjectURL</h4>
         <p>URL.createObjectURL()은 Blob 객체를 나타내는 URL를 포함한 다음과 같은 DOMString를 생성합니다.(blob:URL)
            이 Blob URL은 생성된 window의 document에서만(브라우저) 유효합니다.
            다른 window에서 재활용할 수 없으며, URL의 수명이 한정되어 있기 때문에 file:URL과 다르게 보안 이슈에서 벗어날 수 있습니다.</p>
         <code>blob:http://localhost:1234/28ff8746-94eb-4dbe-9d6c-2443b581dd30 </code>
         <code>활용은 ;
            &lt;img src="blob:http://localhost:1234/28ff8746-94eb-4dbe-9d6c-2443b581dd30" alt="Blob URL Image" />
         </code>
         <h4>revokeObjectURL</h4>
         <p>URL.revokeObjectURL()은 URL.createObjectURL()을 통해 생성한 기존 URL을 해제(폐기)합니다.
            revokeObjectURL을 통해 해제하지 않으면 기존 URL를 유효하다고 판단하고 자바스크립트 엔진에서 GC 되지 않습니다.
            메모리 누수를 방지하기 위해 생성된 URL을 DOM과 바인딩한 후에는 해제하는 것이 좋습니다.</p>
         <code>// Create Blob URL
            const blobUrl = window.URL.createObjectURL(blob)

            // Revoke Blob URL after DOM updates..
            window.URL.revokeObjectURL(blobUrl)</code>
      </section>
      <section>
         <h2>Blob 수신 예제</h2>
         <p>이미지를 Blob 객체로 수신해, &lt;img class="blob" /> 요소로 출력하는 예제입니다.</p>
   <code>{`async function renderBlob(selector, url) {
   try {
      const res = await fetch(url);
      if (!res.ok) {
         throw new Error(backtick Fetch error: \${res.statusText})
      }
      const blob = await res.blob();
      const objectURL = window.URL.createObjectURL(blob);
      const images = document.querySelectorAll(selector);
      images.forEach((image) => image.src = objectURL);

      // DOM 업데이트 후 폐기!
      setTimeout(() => window.URL.revokeObjectURL(objectURL))
   } catch (error) {
      console.error('Error::', error.message)
   }
}

// renderBlob('.blob', 'https://avatars3.githubusercontent.com/u/16679082?s=460&v=4')`}</code>
         <h4>브라우저 지원확인</h4>
         <code>const isBlobSupport = new Blob(['ä']).size === 2 // Boolean </code>
      </section>
   </main>)
}