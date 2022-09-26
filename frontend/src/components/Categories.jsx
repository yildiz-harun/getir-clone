import meyve from '../images/meyve-sebze.jpeg'
import su from '../images/su-icecek.jpeg'
import firindan from '../images/firindan.jpeg'
import temel from '../images/temel-gida.jpeg'
import atis from '../images/atistirmalik.jpeg'
import bebek from '../images/bebek.jpeg'
import ev from '../images/ev-bakim.jpeg'
import dondurma from '../images/dondurma.jpeg'
import evcil from '../images/evcil-hayvan.jpeg'

function Categories() {
  return (
    <div>
      <div className="w-full px-36 mt-4">
        Kategoriler
      </div>
      <div className=" h-[308px] w-full px-28">
        <div className="flex flex-wrap justify-start px-6">
          <div className="flex flex-col justify-center items-center m-2 hover:bg-violet-100 w-[108px] h-[108px]">
            <div className="w-12 h-12 ">
              <img
                className="border rounded-lg"
                src={su}
                alt=""
              />
            </div>
            <div className="text-sm">
              {'Su & İçecek'}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center m-2 hover:bg-violet-100 w-[108px] h-[108px]">
            <div className="w-12 h-12 ">
              <img
                className="border rounded-lg"
                src={meyve}
                alt=""
              />
            </div>
            <div className="text-sm">
              {'Meyve & Sebze'}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center m-2 hover:bg-violet-100 w-[108px] h-[108px]">
            <div className="w-12 h-12 ">
              <img
                className="border rounded-lg"
                src={firindan}
                alt=""
              />
            </div>
            <div className="text-sm">
              Fırından
            </div>
          </div>
          <div className="flex flex-col justify-center items-center m-2 hover:bg-violet-100 w-[108px] h-[108px]">
            <div className="w-12 h-12 ">
              <img
                className="border rounded-lg"
                src={temel}
                alt=""
              />
            </div>
            <div className="text-sm">
              Temel Gıda
            </div>
          </div>
          <div className="flex flex-col justify-center items-center m-2 hover:bg-violet-100 w-[108px] h-[108px]">
            <div className="w-12 h-12 ">
              <img
                className="border rounded-lg"
                src={atis}
                alt=""
              />
            </div>
            <div className="text-sm">
              Atıştırmalık
            </div>
          </div>
          <div className="flex flex-col justify-center items-center m-2 hover:bg-violet-100 w-[108px] h-[108px]">
            <div className="w-12 h-12 ">
              <img
                className="border rounded-lg"
                src={bebek}
                alt=""
              />
            </div>
            <div className="text-sm">Bebek</div>
          </div>
          <div className="flex flex-col justify-center items-center m-2 hover:bg-violet-100 w-[108px] h-[108px]">
            <div className="w-12 h-12 ">
              <img
                className="border rounded-lg"
                src={ev}
                alt=""
              />
            </div>
            <div className="text-sm">
              Ev Bakım
            </div>
          </div>
          <div className="flex flex-col justify-center items-center m-2 hover:bg-violet-100 w-[108px] h-[108px]">
            <div className="w-12 h-12 ">
              <img
                className="border rounded-lg"
                src={dondurma}
                alt=""
              />
            </div>
            <div className="text-sm">
              Dondurma
            </div>
          </div>
          <div className="flex flex-col justify-center items-center m-2 hover:bg-violet-100 w-[108px] h-[108px]">
            <div className="w-12 h-12 ">
              <img
                className="border rounded-lg"
                src={evcil}
                alt=""
              />
            </div>
            <div className="text-sm">
              Evcil Hayvan
            </div>
          </div>
          <div className="flex flex-col justify-center items-center m-2 hover:bg-violet-100 w-[108px] h-[108px]">
            <div className="w-12 h-12 ">
              <img
                className="border rounded-lg"
                src={su}
                alt=""
              />
            </div>
            <div className="text-sm">
              {'Su & İçecek'}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center m-2 hover:bg-violet-100 w-[108px] h-[108px]">
            <div className="w-12 h-12 ">
              <img
                className="border rounded-lg"
                src={meyve}
                alt=""
              />
            </div>
            <div className="text-sm">
              {'Meyve & Sebze'}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center m-2 hover:bg-violet-100 w-[108px] h-[108px]">
            <div className="w-12 h-12 ">
              <img
                className="border rounded-lg"
                src={firindan}
                alt=""
              />
            </div>
            <div className="text-sm">
              Fırından
            </div>
          </div>
          <div className="flex flex-col justify-center items-center m-2 hover:bg-violet-100 w-[108px] h-[108px]">
            <div className="w-12 h-12 ">
              <img
                className="border rounded-lg"
                src={temel}
                alt=""
              />
            </div>
            <div className="text-sm">
              Temel Gıda
            </div>
          </div>
          <div className="flex flex-col justify-center items-center m-2 hover:bg-violet-100 w-[108px] h-[108px]">
            <div className="w-12 h-12 ">
              <img
                className="border rounded-lg"
                src={atis}
                alt=""
              />
            </div>
            <div className="text-sm">
              Atıştırmalık
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
