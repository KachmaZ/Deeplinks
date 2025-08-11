document.querySelector('#form').addEventListener('submit', (event) => {
    event.preventDefault()
    const {userAgent} = navigator
    const requisite = event.target.number.value
    const bank = event.target.bank.value;
    // card number
    if (requisite > 12) {
        if (bank === 'sber') {
            if (/(iPhone|iPad|iPod)/.test(userAgent)) {
                window.location.href=`ios-app-smartonline://sbolonline/p2ptransfer?amount=100&to=${requisite}`
            } else if (/Android/.test(userAgent)) {
                window.location.href=`intent://ru.sberbankmobile/payments/p2p&type=account&requisiteNumber=${requisite}&amount=100`
            } else {
                alert('на телефоне открывай')
            }
        } 
        else {
            if (/(iPhone|iPad|iPod)/.test(userAgent)) {
                window.location.href=`bank100000000004://Main/TransferToPeople?targetAccountId=${requisite}`
            } else if (/Android/.test(userAgent)) {
                window.location.href=`tinkoffbank://Main/TransferToPeople?targetAccountId=${requisite}`
            } else {
                alert('на телефоне открывай')
            }
        }
    } else {
        if (bank === 'sber') {
            if (/(iPhone|iPad|iPod)/.test(userAgent)) {
                window.location.href=`ios-app-smartonline://sbolonline/p2ptransfer?amount=100&to=${requisite}`
            } else if (/Android/.test(userAgent)) {
                window.location.href=`intent://ru.sberbankmobile/payments/p2p&type=phone_number&requisiteNumber=${requisite}&amount=100`
            } else {
                alert('на телефоне открывай')
            }
        } 
        else {
            if (/(iPhone|iPad|iPod)/.test(userAgent)) {
                window.location.href=`bank100000000004://Main/PayByMobileNumber?amount=100&numberPhone=${requisite}&workflowType=RTLNTransfer`
            } else if (/Android/.test(userAgent)) {
                window.location.href= `tinkoffbank://Main/PayByMobileNumber?amount=100&numberPhone=${requisite}&workflowType=RTLNTransfer`
            } else {
                alert('на телефоне открывай')
            }
        }
    }

})