
html {
    background-image: url('http://sakk-klub.hu/wp-content/uploads/2015/12/BvsC_Wallpaper01.jpg');
	background-size: cover;
}

body {
   width: 580px;
   margin: 10px auto;
}

/*=====BOARD GAME=================*/

#board {
    width: 480px;
    margin: 15px auto 20px auto;
    background: #ccc;
    border: 25px solid #fff;
    border-radius: 10px;
    box-shadow: inset -1px 1px 7px rgba(0,0,0,.2), 
                inset 1px -1px 7px rgba(0,0,0,.2), 
                1px 12px 5px rgba(0,0,0,.4), 
                4px 3px 8px rgba(0,0,0,.4), 
                5px 10px 10px rgba(0,0,0,.2), 
                -5px 10px 10px rgba(0,0,0,.4);
}

#game {
    
}

.row {
    clear: both;
    overflow: hidden;
}

.box {
    width: 60px;
    height: 60px;
    float: left;
    text-align: center;
    line-height: 60px;
    font-size: 50px;
    cursor: default;
}

.placed {
    cursor: pointer;
}

.selected {
    -moz-box-shadow:    inset 0 0 10px #311B0B;
    -webkit-box-shadow: inset 0 0 10px #311B0B;
    box-shadow:         inset 0 0 10px #311B0B;
}

.suggest {
    
    -moz-filter: grayscale(50%);
    -webkit-filter: grayscale(50%);
    filter: grayscale(50%);
    
    -moz-box-shadow:    inset 0 0 15px #0f0;
    -webkit-box-shadow: inset 0 0 15px #0f0;
    box-shadow:         inset 0 0 15px #0f0;
	
    cursor: pointer;
}

/*============================================*/

#result {
    width: 480px;
    height: 480px;
    line-height: 480px;
    position: absolute;
    background: transparent;
    text-align: center;
    font-size: 90px;
    cursor: default;
    animation: blur 1.5s ease-out infinite;
    z-index: 10;
}

.hide {
    display: none;
}

@keyframes blur{
  from {
      text-shadow:0px 0px 10px #fff,
                  0px 0px 10px #fff, 
                  0px 0px 25px #fff,
                  0px 0px 25px #fff,
                  0px 0px 25px #fff,
                  0px 0px 25px #fff,
                  0px 0px 25px #fff,
                  0px 0px 25px #fff,
                  0px 0px 50px #fff,
                  0px 0px 50px #fff,
                  0px 0px 50px #7B96B8,
                  0px 0px 150px #7B96B8,
                  0px 10px 100px #7B96B8,
                  0px 10px 100px #7B96B8,
                  0px 10px 100px #7B96B8,
                  0px 10px 100px #7B96B8,
                  0px -10px 100px #7B96B8,
                  0px -10px 100px #7B96B8;
    }
}

#pawn-promotion-option {
    width: 480px;
    height: 480px;
    line-height: 480px;
    position: absolute;
    background: transparent;
    text-align: center;
    font-size: 90px;
    cursor: default;
    z-index: 10;
}

#pawn-promotion-option .option {
    cursor: pointer;
}

/*========================================*/

.option-nav {
    height: 20px;
    width: 500px;
    font-size: 30px;
    margin: 0 auto;
	 line-height: 15px;
}

#player-nav {
    display: inline-block;
    cursor: default;
    float: left;
    width: 200px;
    text-align: left;
	 margin-top: 5px;
}

#player {
    font-size: 32px;
    color: #000;
}

#undo-btn, #option {
    display: inline-block;
    float: right;
    cursor: pointer;
    margin-left: 50px;
	 position: relative;
}

.btn .tooltiptext {
    visibility: hidden;
    font-family: monospace;
    width: 100px;
    background: #000;
    color: #ccc;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    line-height: 20px;
    font-size: 22px;
	
    position: absolute;
    z-index: 1;
    top: 120%;
    left: 50%;
    margin-left: -50px;
}

#undo-btn .tooltiptext {
	width: 80px;
	margin-left: -40px;
}

.btn .tooltiptext::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #000 transparent;
}

.btn:hover .tooltiptext {
    visibility: visible;
}

/*=================*/

#option-menu {
    width: 480px;
    height: 480px;
    position: absolute;
    background: transparent;
    text-align: center;
    font-size: 40px;
    cursor: default;
    z-index: 10;
    letter-spacing: 5px;

}

#back-btn {
    width: 100px;
    margin: 60px auto 0 auto;
}

#theme-menu {
    width: 100%;
    margin: 40px auto 0 auto;
}

#color-menu {
    width: 100%;
    margin: 40px auto 0 auto;
}

#restart-btn {
    width: 280px;
    margin: 40px auto 0 auto;;
}

.button {
    cursor: pointer;
}

/* Responsive design */

@media only screen and (max-width: 570px) {
	body {
		width: 100%;
	}
	
    #board {
        width: 320px;
		 border-width: 13px;
    }
    
    .box {
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 36px;
		 font-weight: normal;
    }
    
    #option {
        width: 80px;
    }
    
    #option-menu {
        width: 320px;
        height: 320px;
        font-size: 26px;
    }
    
    #back-btn {
        margin-top: 25px;
    }
    
    .option-nav {
		  margin: 0 auto;
        width: 340px;
        font-size: 24px;
		  line-height: 10px;
    }
    
	 #player-nav {
		  width: 30%;
	 	  margin-top: 5px;
	 }
	
	 #player {
	     font-size: 28px;		
	 }
	
	 #undo-btn {
		  margin-left: 20px;
	 }
	 
	#option {
		  margin-left: 20px;
	}
    
    #pawn-promotion-option {
        width: 320px;
        height: 320px;
        font-size: 60px;
        line-height: 320px;
    }
    
    #result {
        width: 320px;
        height: 320px;
        font-size: 60px;
        line-height: 320px;
    }
}
