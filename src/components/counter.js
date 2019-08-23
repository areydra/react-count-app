import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count : 0
    }

    handleIncrement = product => { //menggunakan arrow function agar bisa menggunakan this class Counter
        console.log(product) //product(bisa mengubah count sesuai nama product/id product)
        this.setState({ count : this.state.count + 1 }) //gunakan setState untuk merender ulang data yg ada di objek/lainnya
        //this.setState() asalnya dari class Component di module react
    }

    render(){ //berfungsi untuk menampilkan tag html kedalam layar/browser/tampilan
        return (
            <div>
                <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
                <button onClick={ () => this.handleIncrement('Gerry Chocolate') } className="btn btn-secondary btn-sm">
                    Increment
                </button>
            </div>
        )
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-"
        classes += this.state.count === 0 ? "warning" : "primary" //jika state count value 0 maka tambahkan warning jika tidak tambah primary jadi badge m-2 badge-warning or badge m-2 badge-primary
        return classes
    }

    formatCount(){
        const { count } = this.state //artnya mengambil key/method count yg ada di object state
        return count === 0 ? "Zero" : count 
    }
}

export default Counter //menjadikan class Counter default

// NOTE : untuk memanggil function dan variabel javascript didalam tag html, gunakan : kurung kurawa seperti diatas {}
