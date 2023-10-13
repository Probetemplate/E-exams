"use strict"

const btnNext = document.querySelector('#next'),
	btnStart = document.querySelector('#start'),
	btnRank = document.querySelector('#rank'),
	btnGiveUp = document.querySelector('#giveUp'),
	btnShowAnswers = document.querySelector('#showAnswers'),
	btnFinish = document.querySelector('#finish'),
	btnSave = document.querySelector('#save'),
	selectQuiz = document.querySelector('#selectQuiz'),
	quiz = document.querySelector('#quiz'),
	pagination = document.querySelector('#pagination'),
	winPoints = document.querySelector('#points'),
	star = document.querySelector('#star'),
	showAnswers = document.querySelector('#answers'),
	quisSave = document.querySelector('#quizSave'),
	hitsSave = document.querySelector('#hitsSave'),
	timeSave = document.querySelector('#timeSave'),
	textName = document.querySelector('#name'),
	logo = document.querySelector('#logo'),
	logoMobile = document.querySelector('#logoMobile'),
	modal5 = document.querySelector('#modal5'),
	switcherTheme = document.querySelector('#darktheme'),
	quizTitle = document.querySelector('#quizTitle'),
	options = document.querySelector('#options'),
	tabs = document.querySelector('#tabs'),
	allTabs = document.querySelector('.tabs'),
	tabItems = document.querySelector('#tabItems'),
	actionButtons = document.querySelectorAll('.fixed-action-btn'),
	actionButton = document.querySelector('#actionButton'),
	navButtons = document.querySelector('#nav-mobile'),
	navMenu = document.querySelector('#navMenu'),
	quizName = document.querySelector('#quizName'),
	quizInformation = document.querySelector('#quizInformation')

let points = 0,
	currentQuestion = 0,
	matches = [],
	selectedType = -1,
	time = 0,
	timeInterval,
	radioButtons = '',
	types

for (let i = 0; i < names.length; i++) {
	radioButtons +=
		`<div class="col s12 m6">
			<p style="position:relative">
				<i title="Information" class="material-icons modal-trigger teal-text" data-target="modal9" style="position:absolute;right:10px;cursor:pointer;font-size:25px" onclick="changeInformation(${i})">help</i>
				<label>
					<input class="with-gap" name="selectQuiz" type="radio" data-num="${i}" ${i == 0 ? 'checked' : ''} />
					<span>${names[i]}</span>
				</label>
			</p>
			<div style="margin:-5px 0;background-color:#9e9e9e" class="divider"></div>
		</div>`
}

options.innerHTML = radioButtons

types = document.querySelectorAll('[name=selectQuiz]')

const darkTheme = () => {
	localStorage.setItem('darktheme', 1)
	document.body.setAttribute('data-theme', 'dark')
}

const lightTheme = () => {
	localStorage.removeItem('darktheme')
	document.body.setAttribute('data-theme', 'light')
}

if (localStorage.getItem('darktheme')) {
	darkTheme()
	switcherTheme.checked = true
}

const render = () => {
	let html = `<h5 style="margin-top:4px">${currentQuestion + 1}) ${questions[selectedType][currentQuestion]}</h5><p id="time" style="margin:2px 0 0;font-size:17px">${timeProgress(time)}<i class="material-icons right" style="margin-left:5px;font-size:25px">access_time</i></p>`

	const answersQuestion = [answers[selectedType][currentQuestion], ...fakeAnswers[selectedType][currentQuestion]],
		answersRandom = []

	for (let i = 0; i < answersQuestion.length; i++) {
		let rndNumber = parseInt(Math.random() * answersQuestion.length)

		while (answersRandom.indexOf(rndNumber) > -1) {
			rndNumber = parseInt(Math.random() * answersQuestion.length)
		}

		answersRandom[i] = rndNumber

		const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'W', 'Y', 'Z']
		html += (
			`<p>
				<label>
					<input class="with-gap" name="question${currentQuestion}" data-text="${answersQuestion[rndNumber]}" type="radio" />
					<span style="font-size:16px">${alphabet[i]}) ${answersQuestion[rndNumber]}</span>
				</label>
			</p>
			<div style="margin:-5px 0;background-color:#9e9e9e" class="divider"></div>`
		)
	}

	createPagination()

	if (currentQuestion !== answers[selectedType].length - 1) {
		btnNext.setAttribute('title', 'Próxima Pergunta')
		btnNext.innerHTML = 'Next<i class="material-icons right">chevron_right</i>'
	} else {
		btnNext.setAttribute('title', 'Finalizar Quiz')
		btnNext.innerHTML = 'Finish<i class="material-icons right">chevron_right</i>'
	}

	quiz.innerHTML = html
}

const createPagination = () => {
	let htmlPagination = '<li class="disabled"><a><i class="material-icons">chevron_left</i></a></li>'

	for (let i = 0; i < questions[selectedType].length; i++) {
		htmlPagination += (
			`<li class="${matches[i] === undefined ? '' : 'waves-effect waves-light'} ${currentQuestion === i ? 'active bgcolor3 c-df no-border waves-effect waves-light' : `${matches[i] === undefined ? 'disabled' : matches[i] ? `active green c-df no-border ${i === questions[selectedType].length - 1 ? '' : 'brw'}` : `active red c-df no-border ${i === questions[selectedType].length - 1 ? '' : 'brw'}`}`}"><a>${i + 1}</a></li>`
		)
	}

	htmlPagination += `<li class="disabled" style="margin-left:-${currentQuestion >= questions[selectedType].length - 1 ? 0 : 10}px"><a><i class="material-icons">chevron_right</i></a></li>`

	pagination.innerHTML = htmlPagination
	pagination.scrollLeft = pagination.querySelectorAll('li')[currentQuestion < parseInt(questions[selectedType].length / 2 + 1) ? 0 : parseInt(questions[selectedType].length / 2) + 1].offsetLeft
}

const timeProgress = time => {
	const hour = parseInt(time / 3600)
	time -= hour * 3600

	const minutes = parseInt(time / 60)
	time -= minutes * 60

	if (hour >= 1) {
		M.Modal.getInstance(document.querySelector('#modal6')).open()
		stop()
		return
	}

	return `${minutes}m ${time}s`
}

const reTimeProgress = time => {
	const str = time.split(' ')

	return parseInt(str[0].replace('m', '')) * 60 + parseInt(str[1].replace('s', ''))
}

const start = () => {
	navMenu.classList.add('hide')
	navButtons.classList.add('hide')
	selectQuiz.classList.add('hide')
	btnStart.classList.add('hide')
	btnRank.classList.add('hide')
	quiz.classList.remove('hide')
	btnNext.classList.remove('hide')
	btnGiveUp.classList.remove('hide')
	pagination.classList.remove('hide')
	btnSave.removeAttribute('disabled')

	for (let i = 0; i < types.length; i++) {
		if (types[i].checked) {
			selectedType = i
			document.title = `${names[i]} - Quizzes Online`
			logo.innerHTML = `${names[i]} - Quiz`
			logoMobile.innerHTML = `${names[i]} - Quiz`
		}
	}

	render()
	timeInterval = setInterval(() => {
		document.querySelector('#time').innerHTML = (
			`${timeProgress(++time)}<i class="material-icons right" style="margin-left:5px;font-size:25px">access_time</i>`
		)
	}, 1000)
}

const stop = () => {
	navMenu.classList.remove('hide')
	navButtons.classList.remove('hide')
	selectQuiz.classList.remove('hide')
	btnStart.classList.remove('hide')
	btnRank.classList.remove('hide')
	quiz.classList.add('hide')
	btnNext.classList.add('hide')
	btnGiveUp.classList.add('hide')
	btnShowAnswers.classList.add('hide')
	btnFinish.classList.add('hide')
	pagination.classList.add('hide')
	btnSave.classList.add('hide')
	document.title = 'Quizzes Online | SMG'
	logo.innerHTML = `Quizzes Online`
	logoMobile.innerHTML = `Quizzes Online`

	points = 0
	currentQuestion = 0
	selectedType = -1
	matches = []
	clearInterval(timeInterval)
	time = 0
}

const next = () => {
	const currentAnswers = document.querySelectorAll(`[name=question${currentQuestion}]`)
	let sumWithoutResponse = 0

	for (let i = 0; i < currentAnswers.length; i++) {
		if (!currentAnswers[i].checked) sumWithoutResponse += 1
	}

	if (sumWithoutResponse === currentAnswers.length) {
		M.toast({
			html: 'Please select an option!',
			classes: 'crimsonred',
			displayLength: 2050
		})
	} else {
		for (let i = 0; i < currentAnswers.length; i++) {
			if (currentAnswers[i].checked && currentAnswers[i].getAttribute('data-text') === answers[selectedType][currentQuestion]) {
				matches.push(1)
				points += 1
			}
		}

		if (matches[currentQuestion] === undefined) matches.push(0)

		currentQuestion += 1

		if (currentQuestion === answers[selectedType].length) {
			clearInterval(timeInterval)
			for (let i = 0; i < currentAnswers.length; i++) {
				currentAnswers[i].disabled = true
			}

			btnNext.classList.add('hide')
			btnGiveUp.classList.add('hide')
			btnShowAnswers.classList.remove('hide')
			btnSave.classList.remove('hide')
			btnFinish.classList.remove('hide')

			let html = '<h4><i class="material-icons" style="top:2px">question_answer</i>Correct Answers</h4>'
			for (let i = 0; i < answers[selectedType].length; i++) {
				html +=
					`<p style="margin:0">${i + 1}) ${questions[selectedType][i]}</p>
					<p style="margin:0 0 10px">Answer: ${answers[selectedType][i]} <i class="material-icons ${matches[i] === 0 ? 'red-text' : 'green-text'}" style="top:${matches[i] === 0 ? '7' : '5'}px;margin:-7px 0 0">${matches[i] === 0 ? 'clear' : 'done'}</i></p>`
			}

			showAnswers.innerHTML = html

			quisSave.innerHTML = names[selectedType]
			timeSave.innerHTML = timeProgress(time)
			const pointsPercentage = points / answers[selectedType].length * 100
			hitsSave.innerHTML = `${points} of ${questions[selectedType].length} (<span class="${pointsPercentage < 50 ? 'red-text' : 'green-text'}">${pointsPercentage.toFixed(1)}%</span>)`
			winPoints.innerHTML = `${points} of ${(questions[selectedType].length)} achieved a performance of <span class="${pointsPercentage < 50 ? 'red-text' : 'green-text'}">${pointsPercentage.toFixed(1)}%</span>`

			star.className = `material-icons ${pointsPercentage < 50.0 ? 'red-text' : 'green-text'}`
			M.Modal.getInstance(document.querySelector('#modal2')).open()

			createPagination()
		} else render()
	}
}

const arraySort = array => {
	const newArray = []
	let bestArray = -1,
		indexBestArray = -1,
		bestTime = 3600

	while (array.length > 0) {
		for (let i = 0; i < array.length; i++) {
			if (array[i][2] > bestArray) {
				indexBestArray = i
				bestTime = reTimeProgress(array[i][4])
				bestArray = array[i][2]
			} else if (array[i][2] === bestArray && reTimeProgress(array[i][4]) < bestTime) {
				indexBestArray = i
				bestTime = reTimeProgress(array[i][4])
			}
		}

		bestArray = -1
		bestTime = 3600

		newArray.push(array[indexBestArray])
		array.splice(indexBestArray, 1)
	}

	return newArray
}

const save = () => {
	const text = textName.value.trim()
	if (text && text.length > 2) {
		const allSaved = localStorage.getItem('registeredItems')

		if (!allSaved) {
			localStorage.setItem(
				'registeredItems',
				`[["${names[selectedType]}","${text}",${points},${questions[selectedType].length},"${timeProgress(time)}"]]`
			)
		} else {
			let newArray = JSON.parse(allSaved)

			newArray.push([names[selectedType], text, points, questions[selectedType].length, timeProgress(time)])
			newArray = arraySort(newArray)

			localStorage.setItem('registeredItems', `${JSON.stringify(newArray)}`)
		}

		M.Modal.getInstance(modal5).close()
		btnSave.setAttribute('disabled', 'true')
		textName.value = ''
		textName.select()
	} else {
		M.toast({
			html: 'Please enter a valid name!',
			classes: 'red accent-4',
			displayLength: 2050
		})
		textName.select()
	}
}

const renderSavedItems = (index = 0) => {
	if (M.Tabs.getInstance(tabs)) M.Tabs.getInstance(tabs).destroy()

	const items = localStorage.getItem('registeredItems'),
		defaultHtmlItem = '<table class="responsive-table"><thead><tr><th>Points table</th><th class="center-align">Name</th><th class="center-align">Points</th><th class="center-align">Time</th><th class="center-align">Remover</th></tr></thead><tbody>'

	let html = '<li style="margin-left:10px"><p style="text-align: center;font-size: 20px;margin-top: 10px">There are no saved items 😇</p></li>',
		htmlParent = '',
		htmlItem, newItems

	htmlItem = defaultHtmlItem

	if (items) {
		html = ''
		let doesItHave = false

		for (let i = 0; i < types.length; i++) {
			newItems = JSON.parse(items)
			for (let j = 0, num = 0, pos = 1; j < newItems.length; j++ , num++) {
				if (names[i] === newItems[j][0]) {
					htmlItem += (
						`<tr>
							<td>${pos}°</td>
							<td class="center-align">${newItems[j][1]}</td>
							<td class="center-align">${newItems[j][2]}/${newItems[j][3]}</td>
							<td class="center-align">${newItems[j][4]}</td>
							<td class="center-align"><i title="Remover" class="material-icons red-text" style="cursor:pointer" onclick="deleteItem(${num}, ${parseInt(types[i].getAttribute('data-num'), 10)})">close</i></td>
						</tr>`
					)

					newItems.splice(j, 1)
					pos += 1
					j -= 1
					doesItHave = true
				}
			}

			if (doesItHave) {
				html += `<li class="tab tabs-fixed-width tab-demo"><a data-num="${types[i].getAttribute('data-num')}" class="${index == i ? 'active' : ''}" href="#quiz${i}">${names[i]}</a></li>`
				htmlItem += '</tbody></table>'
				htmlParent += `<div id="quiz${i}">${htmlItem}</div>`
				doesItHave = false
				htmlItem = defaultHtmlItem
			}
		}

		tabs.innerHTML = html
		tabItems.innerHTML = htmlParent
		M.Tabs.init(allTabs)
	} else {
		tabs.innerHTML = html
		tabItems.innerHTML = htmlParent
	}
}

const deleteItem = (item, index) => {
	const allSaved = JSON.parse(localStorage.getItem('registeredItems'))

	allSaved.splice(item, 1)
	if (allSaved.length) localStorage.setItem('registeredItems', `${JSON.stringify(allSaved)}`)
	else localStorage.removeItem('registeredItems')

	renderSavedItems(index)
}

const clearSavedItems = () => {
	localStorage.removeItem('registeredItems')
	renderSavedItems()
}

const changeInformation = quiz => {
	quizName.innerHTML = names[quiz]
	quizInformation.innerHTML = `Number of total questions: ${questions[quiz].length}`
}

const tabletMedia = x => {
	const getActionButton = M.FloatingActionButton.getInstance(actionButton)
	if (x.matches) M.FloatingActionButton.init(actionButtons)
	else if (getActionButton) getActionButton.destroy()
}

const x = window.matchMedia("(min-width: 1024px)")
tabletMedia(x)
x.addListener(tabletMedia)

window.addEventListener('DOMContentLoaded', () => {
	M.Sidenav.init(document.querySelectorAll('.sidenav'))
	M.Modal.init(document.querySelectorAll('.modal'))
	M.Collapsible.init(document.querySelectorAll('.collapsible'));

	renderSavedItems()
})

btnRank.onclick = () => {
	const currentTab = M.Tabs.getInstance(tabs)

	if (currentTab) {
		for (let i = 0; i < currentTab.$tabLinks.length; i++) {
			const num = currentTab.$tabLinks[i].getAttribute('data-num')
			if (types[num].checked) {
				currentTab.$tabLinks[i].click()

				setTimeout(() => {
					currentTab.updateTabIndicator()
					tabs.scrollLeft = currentTab.$tabLinks[i].offsetLeft
				}, 300)

				break
			} else if (i === currentTab.$tabLinks.length - 1) {
				currentTab.$tabLinks[0].click()

				setTimeout(() => {
					currentTab.updateTabIndicator()
					tabs.scrollLeft = currentTab.$tabLinks[i].offsetLeft
				}, 300)
			}
		}
	}
}

btnSave.onclick = () => {
	setTimeout(() => {
		textName.select()
	}, 50)
}

modal5.onkeydown = e => {
	if (e.which === 13) {
		save()
		renderSavedItems()
	}
}

window.onload = () => {
	const preLoader = document.querySelector('#preloader')

	if (location.search.includes('?quiz=')) {
		const name = decodeURIComponent(location.search.split('=')[1])

		for (let i = 0; i < names.length; i++) {
			if (names[i] === name) {
				types[i].checked = true
				start()
				break
			}
		}
	}

	document.querySelector('#nav').classList.remove('hide')
	document.querySelector('#container').classList.remove('hide')
	preLoader.classList.add('hide')

	try {
		preLoader.remove()
	} catch (err) {
		preLoader.style.display = 'none'
	}
}
