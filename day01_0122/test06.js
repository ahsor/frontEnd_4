const path = require('path');
/*
const userPath = ['foo', 'bar', 'baz/asdf', 'quux'];
console.log( path.join( `${userPath}` ));

const userPath2 = userPath.join( path.sep );
//const userPath2 = userPath.split( path.sep );

// \ / 원  / 통합시켜 주는 기능 
console.log( `${userPath2}` );
// foo/bar/bax/asdf/quux
*/
// 문자열도 조립하고 
const textPath = path.join('/foo', 'bar', 'baz/asdf', 'quux');
console.log( textPath );

const array = ['foo', 'bar', 'baz/asdf', 'quux'];
const arrayPath = array.join(path.sep); 
// path.sep : 경로 세그먼트의 구분 기호를 인식 
console.log( arrayPath);

// const userPath = '\foo\bar\baz\asdf\quux';
// 자신이 만든 문자열패스는 오류 발생 ?
const splitePath = textPath.split(path.sep);
// path.sep : 분리할때도 자동 인식 
console.log( splitePath);  // 템플릿 문자열로 출력해야함 
console.log( `${splitePath}`);

const userPath = path.join( 'Users/kim', 'vscode.exe');
console.log( userPath );

const filename = "C:\\Users\\jemicom\\notepad.exe";
console.log(`디렉토리 : ${path.dirname(filename)}, 
            파일 이름 : ${path.basename(filename)}, 
            확장자 : ${path.extname(filename)}`);


