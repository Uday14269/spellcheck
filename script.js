import textgears from 'textgears-api';
let input = document.querySelector('input')
let textarea = document.querySelector('textarea')

input.addEventListener('change', () => {
	let files = input.files;

	if (files.length == 0) return;

	const file = files[0];

	let reader = new FileReader();

	reader.onload = (e) => {
		const file = e.target.result;
		const lines = file.split(/\r\n|\n/);
		textarea.value = lines.join('\n');
	}
	

	

	reader.onerror = (e) => alert(e.target.error.name);
	reader.readAsText(file);


	const textgearsApi = textgears('JjfNDjpKeGfDmpnF', {language: 'en-US'});
	textgearsApi.checkGrammar('An essay is nothing but a piece of content which is written from the perception of writer or author. Essays are similar to a story, pamphlet, thesis, etc. The best thing about Essay is you can use any type of language – formal or informal.')
    .then((data) => {
        for (const error of data.errors) {
            console.log('Error: %s. Suggestions: %s', error.bad, error.better.join(', '));
        }
    })
    .catch((err) => {});
});
