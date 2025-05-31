// En caso de necesitar la implementación del FetchAPI
import { TextDecoder, TextEncoder } from 'util';
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;