import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ZoomIn, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react'
import { useTranslation } from 'react-i18next'

/* ── SVG Scenes ── */

function OfficeBefore() {
  return (
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="280" fill="#9B8B75"/>
      <rect x="0" y="210" width="400" height="70" fill="#6B5540"/>
      <rect x="0" y="207" width="400" height="6" fill="#7A6450"/>
      <ellipse cx="70" cy="130" rx="28" ry="18" fill="#7A6040" opacity="0.4"/>
      <ellipse cx="340" cy="100" rx="22" ry="14" fill="#7A6040" opacity="0.3"/>
      <ellipse cx="200" cy="80" rx="40" ry="10" fill="#8A7050" opacity="0.25"/>
      <rect x="50" y="158" width="300" height="52" rx="4" fill="#5C3A28"/>
      <rect x="50" y="155" width="300" height="9" rx="2" fill="#6B4832"/>
      <rect x="55" y="210" width="10" height="25" fill="#4A2E1C"/>
      <rect x="335" y="210" width="10" height="25" fill="#4A2E1C"/>
      <rect x="70" y="148" width="58" height="75" rx="2" fill="#EAE0C0" transform="rotate(-9 99 185)"/>
      <rect x="108" y="144" width="52" height="68" rx="2" fill="#DDD5B0" transform="rotate(6 134 178)"/>
      <rect x="148" y="146" width="56" height="72" rx="2" fill="#E6DEC4" transform="rotate(-4 176 182)"/>
      <rect x="188" y="142" width="48" height="65" rx="2" fill="#D8D0AC" transform="rotate(7 212 174)"/>
      <ellipse cx="105" cy="158" rx="16" ry="6" fill="#5A3318" opacity="0.7"/>
      <rect x="93" y="144" width="24" height="22" rx="4" fill="#6A3C20"/>
      <rect x="117" y="150" width="9" height="12" rx="4" fill="#6A3C20"/>
      <rect x="228" y="112" width="80" height="56" rx="3" fill="#2A2A2A"/>
      <rect x="233" y="117" width="70" height="46" fill="#3B4830" opacity="0.9"/>
      <rect x="260" y="168" width="16" height="10" fill="#1A1A1A"/>
      <rect x="248" y="177" width="40" height="5" fill="#222"/>
      <rect x="228" y="112" width="80" height="5" fill="#9A8060" opacity="0.6"/>
      <rect x="308" y="188" width="34" height="38" rx="3" fill="#3A3818"/>
      <ellipse cx="325" cy="188" rx="19" ry="11" fill="#4A4825"/>
      <rect x="310" y="174" width="28" height="18" rx="2" fill="#D0BA70" transform="rotate(-12 324 183)"/>
      <rect x="316" y="170" width="22" height="14" rx="2" fill="#C4B065" transform="rotate(10 327 177)"/>
      <circle cx="120" cy="245" r="13" fill="#D4BE78" opacity="0.7"/>
      <circle cx="185" cy="255" r="10" fill="#C8B468" opacity="0.65"/>
      <circle cx="255" cy="242" r="11" fill="#D0BC72" opacity="0.7"/>
      <rect x="80" y="250" width="30" height="4" rx="2" fill="#C0A858" opacity="0.6" transform="rotate(-15 95 252)"/>
      <ellipse cx="165" cy="268" rx="38" ry="7" fill="#5A4428" opacity="0.45"/>
      <ellipse cx="300" cy="258" rx="28" ry="6" fill="#5A4428" opacity="0.35"/>
    </svg>
  )
}

function OfficeAfter() {
  return (
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="280" fill="#F0F4FA"/>
      <rect x="0" y="210" width="400" height="70" fill="#E8EEF8"/>
      <rect x="0" y="207" width="400" height="4" fill="#D0D8EA"/>
      <rect x="140" y="30" width="120" height="90" rx="4" fill="#B8D8F8"/>
      <rect x="140" y="30" width="120" height="90" rx="4" fill="none" stroke="#C8D8EA" strokeWidth="6"/>
      <line x1="200" y1="30" x2="200" y2="120" stroke="#C8D8EA" strokeWidth="3"/>
      <line x1="140" y1="75" x2="260" y2="75" stroke="#C8D8EA" strokeWidth="3"/>
      <ellipse cx="200" cy="30" rx="60" ry="25" fill="#E8F4FF" opacity="0.5"/>
      <rect x="50" y="158" width="300" height="52" rx="4" fill="#FFFFFF"/>
      <rect x="50" y="155" width="300" height="9" rx="2" fill="#E8EEF4"/>
      <rect x="55" y="210" width="10" height="25" fill="#C8D0DC"/>
      <rect x="335" y="210" width="10" height="25" fill="#C8D0DC"/>
      <rect x="150" y="138" width="100" height="68" rx="3" fill="#E0E8F4"/>
      <rect x="155" y="143" width="90" height="56" rx="2" fill="#A8C4E8"/>
      <rect x="145" y="206" width="110" height="6" rx="2" fill="#D0D8E8"/>
      <rect x="80" y="162" width="50" height="42" rx="2" fill="#FAFAFA"/>
      <line x1="86" y1="170" x2="124" y2="170" stroke="#C8D0E0" strokeWidth="1.5"/>
      <line x1="86" y1="178" x2="124" y2="178" stroke="#C8D0E0" strokeWidth="1.5"/>
      <line x1="86" y1="186" x2="110" y2="186" stroke="#C8D0E0" strokeWidth="1.5"/>
      <rect x="285" y="155" width="22" height="24" rx="4" fill="#FFFFFF"/>
      <rect x="307" y="161" width="8" height="11" rx="4" fill="none" stroke="#E0E8F0" strokeWidth="2"/>
      <ellipse cx="296" cy="155" rx="12" ry="4" fill="#F0F0F0"/>
      <ellipse cx="296" cy="155" rx="8" ry="2.5" fill="#D4A870"/>
      <rect x="330" y="180" width="22" height="28" rx="3" fill="#B8C8E0"/>
      <ellipse cx="341" cy="165" rx="18" ry="20" fill="#6BAF60"/>
      <ellipse cx="328" cy="172" rx="12" ry="14" fill="#5A9E50"/>
      <ellipse cx="354" cy="170" rx="12" ry="14" fill="#74B86A"/>
      <text x="70" y="100" fill="#A8C4E8" fontSize="14" opacity="0.8">✦</text>
      <text x="310" y="85" fill="#A8C4E8" fontSize="10" opacity="0.7">✦</text>
      <text x="370" y="150" fill="#A8C4E8" fontSize="12" opacity="0.6">✦</text>
      <rect x="0" y="210" width="400" height="2" fill="#FFFFFF" opacity="0.6"/>
      <ellipse cx="200" cy="230" rx="120" ry="8" fill="#FFFFFF" opacity="0.3"/>
    </svg>
  )
}

function HomeBefore() {
  return (
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="280" fill="#9E8E78"/>
      <rect x="0" y="195" width="400" height="85" fill="#7A6248"/>
      <rect x="0" y="192" width="400" height="6" fill="#8A7258"/>
      <rect x="30" y="195" width="340" height="60" rx="3" fill="#8B6A50" opacity="0.8"/>
      <ellipse cx="120" cy="230" rx="35" ry="12" fill="#6A4A30" opacity="0.5"/>
      <ellipse cx="270" cy="245" rx="28" ry="9" fill="#6A4A30" opacity="0.45"/>
      <ellipse cx="200" cy="215" rx="20" ry="7" fill="#5A3A20" opacity="0.4"/>
      <rect x="40" y="148" width="200" height="70" rx="8" fill="#7A5040"/>
      <rect x="40" y="148" width="200" height="20" rx="8" fill="#8A6050"/>
      <rect x="40" y="148" width="12" height="70" rx="4" fill="#8A6050"/>
      <rect x="228" y="148" width="12" height="70" rx="4" fill="#8A6050"/>
      <rect x="60" y="162" width="50" height="35" rx="6" fill="#9A7060" transform="rotate(-15 85 179)"/>
      <rect x="130" y="170" width="50" height="35" rx="6" fill="#7A5848" transform="rotate(20 155 187)"/>
      <rect x="175" y="155" width="45" height="32" rx="6" fill="#8A6855" transform="rotate(-8 197 171)"/>
      <rect x="260" y="220" width="28" height="20" rx="3" fill="#C84040" opacity="0.8"/>
      <circle cx="320" cy="232" r="14" fill="#E08040" opacity="0.75"/>
      <rect x="290" y="240" width="22" height="15" rx="2" fill="#4080C0" opacity="0.7"/>
      <rect x="55" y="225" width="45" height="28" rx="2" fill="#D4A060" transform="rotate(10 77 239)"/>
      <rect x="62" y="222" width="45" height="28" rx="2" fill="#C09050" transform="rotate(5 84 236)"/>
      <ellipse cx="120" cy="195" rx="12" ry="4" fill="#7A8050" opacity="0.6"/>
      <rect x="108" y="178" width="24" height="22" rx="3" fill="#8A9060" opacity="0.7"/>
      <ellipse cx="300" cy="110" rx="25" ry="18" fill="#8A7055" opacity="0.35"/>
      <ellipse cx="50" cy="150" rx="18" ry="12" fill="#8A7055" opacity="0.3"/>
    </svg>
  )
}

function HomeAfter() {
  return (
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="280" fill="#F8F5F0"/>
      <rect x="0" y="195" width="400" height="85" fill="#F0EDE8"/>
      <rect x="0" y="192" width="400" height="5" fill="#E0DBD4"/>
      <rect x="30" y="195" width="340" height="60" rx="3" fill="#E8E0D8"/>
      <line x1="30" y1="208" x2="370" y2="208" stroke="#DDD8D0" strokeWidth="1.5"/>
      <line x1="30" y1="220" x2="370" y2="220" stroke="#DDD8D0" strokeWidth="1.5"/>
      <line x1="30" y1="232" x2="370" y2="232" stroke="#DDD8D0" strokeWidth="1.5"/>
      <line x1="30" y1="244" x2="370" y2="244" stroke="#DDD8D0" strokeWidth="1.5"/>
      <rect x="40" y="148" width="200" height="70" rx="8" fill="#C8B8A8"/>
      <rect x="40" y="148" width="200" height="20" rx="8" fill="#D8C8B8"/>
      <rect x="40" y="148" width="12" height="70" rx="4" fill="#D8C8B8"/>
      <rect x="228" y="148" width="12" height="70" rx="4" fill="#D8C8B8"/>
      <rect x="58" y="162" width="50" height="35" rx="6" fill="#B8A898"/>
      <rect x="118" y="162" width="50" height="35" rx="6" fill="#C8B8A8"/>
      <rect x="178" y="162" width="50" height="35" rx="6" fill="#B8A898"/>
      <rect x="260" y="185" width="110" height="55" rx="6" fill="#D8CEC4"/>
      <rect x="260" y="183" width="110" height="8" rx="4" fill="#E8DED4"/>
      <rect x="295" y="168" width="18" height="22" rx="4" fill="#A8B8C8"/>
      <ellipse cx="304" cy="155" rx="14" ry="16" fill="#E85870"/>
      <ellipse cx="294" cy="160" rx="10" ry="12" fill="#F0708A"/>
      <ellipse cx="314" cy="160" rx="10" ry="12" fill="#E04060"/>
      <rect x="335" y="170" width="10" height="30" rx="2" fill="#6090C0"/>
      <rect x="347" y="172" width="10" height="28" rx="2" fill="#C06080"/>
      <rect x="359" y="174" width="10" height="26" rx="2" fill="#60A870"/>
      <rect x="280" y="40" width="90" height="70" rx="4" fill="#D8EEF8"/>
      <rect x="280" y="40" width="90" height="70" rx="4" fill="none" stroke="#C8D8E8" strokeWidth="5"/>
      <line x1="325" y1="40" x2="325" y2="110" stroke="#C8D8E8" strokeWidth="2.5"/>
      <ellipse cx="325" cy="40" rx="45" ry="20" fill="#E8F4FF" opacity="0.6"/>
      <text x="55" y="100" fill="#C8B8A8" fontSize="13" opacity="0.7">✦</text>
      <text x="195" y="85" fill="#C8B8A8" fontSize="10" opacity="0.6">✦</text>
    </svg>
  )
}

function RetailBefore() {
  return (
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="280" fill="#8A7E6E"/>
      <rect x="0" y="220" width="400" height="60" fill="#6A5E50"/>
      <rect x="0" y="217" width="400" height="6" fill="#7A6E60"/>
      <ellipse cx="200" cy="250" rx="80" ry="10" fill="#5A4E40" opacity="0.4"/>
      <ellipse cx="80" cy="260" rx="40" ry="7" fill="#5A4E40" opacity="0.35"/>
      <ellipse cx="330" cy="255" rx="45" ry="8" fill="#5A4E40" opacity="0.38"/>
      <rect x="20" y="60" width="110" height="165" rx="2" fill="#5C4A38"/>
      <rect x="20" y="60" width="110" height="6" fill="#6C5A48"/>
      <rect x="20" y="100" width="110" height="5" fill="#4A3828"/>
      <rect x="20" y="140" width="110" height="5" fill="#4A3828"/>
      <rect x="20" y="180" width="110" height="5" fill="#4A3828"/>
      <rect x="28" y="68" width="22" height="28" rx="2" fill="#C08040" transform="rotate(-8 39 82)"/>
      <rect x="52" y="70" width="18" height="25" rx="2" fill="#8040A0" transform="rotate(5 61 82)"/>
      <rect x="72" y="65" width="25" height="30" rx="2" fill="#C04040" transform="rotate(-3 84 80)"/>
      <rect x="100" y="72" width="20" height="22" rx="2" fill="#40A0C0" transform="rotate(10 110 83)"/>
      <rect x="28" y="108" width="20" height="26" rx="2" fill="#A08030" transform="rotate(6 38 121)"/>
      <rect x="52" y="105" width="24" height="28" rx="2" fill="#6040A0" transform="rotate(-5 64 119)"/>
      <rect x="80" y="110" width="18" height="24" rx="2" fill="#A04040" transform="rotate(8 89 122)"/>
      <rect x="100" y="107" width="22" height="26" rx="2" fill="#40A060" transform="rotate(-9 111 120)"/>
      <rect x="20" y="96" width="110" height="4" fill="#A08060" opacity="0.5"/>
      <rect x="20" y="136" width="110" height="4" fill="#A08060" opacity="0.4"/>
      <rect x="270" y="60" width="110" height="165" rx="2" fill="#5C4A38"/>
      <rect x="270" y="60" width="110" height="6" fill="#6C5A48"/>
      <rect x="270" y="100" width="110" height="5" fill="#4A3828"/>
      <rect x="270" y="140" width="110" height="5" fill="#4A3828"/>
      <rect x="270" y="180" width="110" height="5" fill="#4A3828"/>
      <rect x="278" y="66" width="20" height="28" rx="2" fill="#C08040" transform="rotate(7 288 80)"/>
      <rect x="300" y="68" width="18" height="25" rx="2" fill="#4080C0" transform="rotate(-6 309 80)"/>
      <rect x="322" y="65" width="24" height="30" rx="2" fill="#C04080" transform="rotate(4 334 80)"/>
      <rect x="350" y="70" width="20" height="25" rx="2" fill="#80C040" transform="rotate(-10 360 82)"/>
      <rect x="130" y="170" width="140" height="50" rx="4" fill="#5C4A38"/>
      <rect x="130" y="168" width="140" height="8" rx="2" fill="#4A3828"/>
      <ellipse cx="165" cy="168" rx="18" ry="5" fill="#4A3020" opacity="0.6"/>
      <rect x="152" y="148" width="28" height="24" rx="3" fill="#6A4030"/>
    </svg>
  )
}

function RetailAfter() {
  return (
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="280" fill="#FAFAF8"/>
      <rect x="0" y="220" width="400" height="60" fill="#F0EEE8"/>
      <rect x="0" y="217" width="400" height="5" fill="#E0DDD8"/>
      <ellipse cx="200" cy="245" rx="140" ry="12" fill="#FFFFFF" opacity="0.5"/>
      <rect x="20" y="60" width="110" height="165" rx="2" fill="#E8E4E0"/>
      <rect x="20" y="60" width="110" height="6" fill="#D8D4D0"/>
      <rect x="20" y="100" width="110" height="4" fill="#D0CCC8"/>
      <rect x="20" y="140" width="110" height="4" fill="#D0CCC8"/>
      <rect x="20" y="180" width="110" height="4" fill="#D0CCC8"/>
      <rect x="28" y="68" width="22" height="28" rx="2" fill="#E06060"/>
      <rect x="54" y="68" width="22" height="28" rx="2" fill="#6080E0"/>
      <rect x="80" y="68" width="22" height="28" rx="2" fill="#60C080"/>
      <rect x="106" y="68" width="18" height="28" rx="2" fill="#E0A040"/>
      <rect x="28" y="108" width="22" height="28" rx="2" fill="#A060E0"/>
      <rect x="54" y="108" width="22" height="28" rx="2" fill="#E06080"/>
      <rect x="80" y="108" width="22" height="28" rx="2" fill="#40A0C0"/>
      <rect x="106" y="108" width="18" height="28" rx="2" fill="#80C060"/>
      <rect x="28" y="148" width="22" height="28" rx="2" fill="#E08040"/>
      <rect x="54" y="148" width="22" height="28" rx="2" fill="#6060C0"/>
      <rect x="80" y="148" width="22" height="28" rx="2" fill="#C06040"/>
      <rect x="106" y="148" width="18" height="28" rx="2" fill="#40C0A0"/>
      <rect x="270" y="60" width="110" height="165" rx="2" fill="#E8E4E0"/>
      <rect x="270" y="60" width="110" height="6" fill="#D8D4D0"/>
      <rect x="270" y="100" width="110" height="4" fill="#D0CCC8"/>
      <rect x="270" y="140" width="110" height="4" fill="#D0CCC8"/>
      <rect x="270" y="180" width="110" height="4" fill="#D0CCC8"/>
      <rect x="278" y="68" width="22" height="28" rx="2" fill="#E06060"/>
      <rect x="304" y="68" width="22" height="28" rx="2" fill="#6080E0"/>
      <rect x="330" y="68" width="22" height="28" rx="2" fill="#60C080"/>
      <rect x="356" y="68" width="18" height="28" rx="2" fill="#E0A040"/>
      <rect x="278" y="108" width="22" height="28" rx="2" fill="#A060E0"/>
      <rect x="304" y="108" width="22" height="28" rx="2" fill="#40A0C0"/>
      <rect x="330" y="108" width="22" height="28" rx="2" fill="#80C060"/>
      <rect x="356" y="108" width="18" height="28" rx="2" fill="#E06080"/>
      <rect x="130" y="170" width="140" height="50" rx="4" fill="#FFFFFF"/>
      <rect x="130" y="168" width="140" height="8" rx="2" fill="#E8E4E0"/>
      <rect x="170" y="148" width="60" height="22" rx="3" fill="#D0CCE8"/>
      <rect x="185" y="155" width="30" height="10" rx="2" fill="#A0A8D0"/>
      <text x="145" y="90" fill="#C8D0E0" fontSize="14" opacity="0.8">✦</text>
      <text x="365" y="55" fill="#C8D0E0" fontSize="10" opacity="0.7">✦</text>
      <text x="355" y="165" fill="#C8D0E0" fontSize="12" opacity="0.6">✦</text>
    </svg>
  )
}

function ConstructionBefore() {
  return (
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="280" fill="#B0A090"/>
      <rect x="0" y="210" width="400" height="70" fill="#9A8A78"/>
      <ellipse cx="100" cy="80" rx="50" ry="30" fill="#A09080" opacity="0.4"/>
      <ellipse cx="280" cy="120" rx="60" ry="40" fill="#A09080" opacity="0.35"/>
      <ellipse cx="50" cy="170" rx="40" ry="25" fill="#907E6E" opacity="0.4"/>
      <rect x="40" y="215" width="80" height="30" rx="2" fill="#888070" opacity="0.8"/>
      <rect x="55" y="200" width="50" height="20" rx="2" fill="#787060" opacity="0.7"/>
      <rect x="160" y="220" width="100" height="25" rx="2" fill="#808878" opacity="0.75"/>
      <rect x="180" y="210" width="60" height="15" rx="2" fill="#707868" opacity="0.7"/>
      <rect x="280" y="218" width="90" height="28" rx="2" fill="#888078" opacity="0.8"/>
      <ellipse cx="200" cy="250" rx="150" ry="15" fill="#C0B8A8" opacity="0.5"/>
      <ellipse cx="100" cy="235" rx="60" ry="10" fill="#C0B8A8" opacity="0.4"/>
      <ellipse cx="320" cy="240" rx="50" ry="9" fill="#C0B8A8" opacity="0.4"/>
      <rect x="320" y="185" width="28" height="30" rx="3" fill="#708088"/>
      <ellipse cx="334" cy="185" rx="15" ry="5" fill="#8090A0"/>
      <rect x="330" y="188" width="8" height="15" rx="2" fill="#506070"/>
      <rect x="100" y="225" width="40" height="12" rx="1" fill="#A09880" transform="rotate(-10 120 231)"/>
      <rect x="115" y="232" width="35" height="10" rx="1" fill="#908870" transform="rotate(5 132 237)"/>
      <rect x="350" y="220" width="8" height="45" rx="2" fill="#606870" transform="rotate(-20 354 242)"/>
      <rect x="340" y="218" width="30" height="8" rx="2" fill="#506068"/>
      <circle cx="80" cy="150" r="3" fill="#C8C0B0" opacity="0.6"/>
      <circle cx="150" cy="100" r="2" fill="#C8C0B0" opacity="0.5"/>
      <circle cx="250" cy="140" r="3" fill="#C8C0B0" opacity="0.55"/>
      <circle cx="330" cy="90" r="2" fill="#C8C0B0" opacity="0.5"/>
      <circle cx="180" cy="60" r="4" fill="#C8C0B0" opacity="0.45"/>
    </svg>
  )
}

function ConstructionAfter() {
  return (
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="280" fill="#F8F6F2"/>
      <rect width="400" height="215" fill="#F4F2EE"/>
      <rect x="0" y="210" width="400" height="70" fill="#E8E6E0"/>
      <rect x="0" y="207" width="400" height="5" fill="#D8D6D0"/>
      <ellipse cx="200" cy="240" rx="180" ry="15" fill="#FFFFFF" opacity="0.5"/>
      <line x1="0" y1="215" x2="400" y2="215" stroke="#E0DDD8" strokeWidth="1"/>
      <line x1="80" y1="215" x2="80" y2="280" stroke="#E0DDD8" strokeWidth="1"/>
      <line x1="160" y1="215" x2="160" y2="280" stroke="#E0DDD8" strokeWidth="1"/>
      <line x1="240" y1="215" x2="240" y2="280" stroke="#E0DDD8" strokeWidth="1"/>
      <line x1="320" y1="215" x2="320" y2="280" stroke="#E0DDD8" strokeWidth="1"/>
      <line x1="0" y1="247" x2="400" y2="247" stroke="#E0DDD8" strokeWidth="1"/>
      <rect x="150" y="40" width="100" height="80" rx="4" fill="#C8E4F8"/>
      <rect x="150" y="40" width="100" height="80" rx="4" fill="none" stroke="#D0D8E0" strokeWidth="5"/>
      <line x1="200" y1="40" x2="200" y2="120" stroke="#D0D8E0" strokeWidth="2.5"/>
      <line x1="150" y1="80" x2="250" y2="80" stroke="#D0D8E0" strokeWidth="2.5"/>
      <ellipse cx="200" cy="40" rx="50" ry="20" fill="#E0F0FF" opacity="0.6"/>
      <rect x="340" y="190" width="30" height="25" rx="4" fill="#B0C0D0"/>
      <ellipse cx="355" cy="178" rx="22" ry="18" fill="#70C070"/>
      <ellipse cx="342" cy="183" rx="14" ry="12" fill="#60B060"/>
      <ellipse cx="368" cy="182" rx="14" ry="12" fill="#80C880"/>
      <rect x="30" y="215" width="45" height="35" rx="3" fill="#E0D8D0"/>
      <rect x="30" y="215" width="45" height="8" rx="2" fill="#D0C8C0"/>
      <text x="60" y="80" fill="#C8D0D8" fontSize="16" opacity="0.8">✦</text>
      <text x="300" y="60" fill="#C8D0D8" fontSize="11" opacity="0.7">✦</text>
      <text x="360" y="140" fill="#C8D0D8" fontSize="13" opacity="0.65">✦</text>
      <text x="130" y="170" fill="#C8D0D8" fontSize="9" opacity="0.6">✦</text>
    </svg>
  )
}

function HallwayBefore() {
  return (
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="280" fill="#9A9080"/>
      <rect x="0" y="215" width="400" height="65" fill="#7A7060"/>
      <rect x="0" y="212" width="400" height="6" fill="#8A8070"/>
      <polygon points="120,0 280,0 330,215 70,215" fill="#8E8472"/>
      <ellipse cx="80" cy="100" rx="35" ry="25" fill="#7A7060" opacity="0.4"/>
      <ellipse cx="320" cy="140" rx="30" ry="20" fill="#7A7060" opacity="0.35"/>
      <ellipse cx="200" cy="60" rx="20" ry="12" fill="#7A7060" opacity="0.3"/>
      <rect x="60" y="155" width="50" height="12" rx="2" fill="#6A6050" opacity="0.5"/>
      <rect x="290" y="130" width="40" height="10" rx="2" fill="#6A6050" opacity="0.45"/>
      <ellipse cx="150" cy="245" rx="40" ry="10" fill="#6A6050" opacity="0.55"/>
      <ellipse cx="280" cy="255" rx="30" ry="8" fill="#6A6050" opacity="0.5"/>
      <ellipse cx="200" cy="240" rx="20" ry="6" fill="#6A6050" opacity="0.45"/>
      <ellipse cx="50" cy="228" rx="30" ry="22" fill="#404030" opacity="0.85"/>
      <rect x="22" y="205" width="58" height="50" rx="15" fill="#383825" opacity="0.8"/>
      <ellipse cx="50" cy="205" rx="30" ry="12" fill="#484830" opacity="0.9"/>
      <rect x="180" y="230" width="40" height="28" rx="2" fill="#D4C880" transform="rotate(-12 200 244)"/>
      <rect x="200" y="235" width="35" height="24" rx="2" fill="#C8BC70" transform="rotate(8 217 247)"/>
      <rect x="155" y="30" width="90" height="185" rx="3" fill="#787060"/>
      <rect x="160" y="35" width="80" height="175" rx="2" fill="#686050"/>
      <ellipse cx="225" cy="127" rx="6" ry="6" fill="#A09070"/>
      <ellipse cx="200" cy="15" rx="60" ry="10" fill="#8A8070" opacity="0.4"/>
    </svg>
  )
}

function HallwayAfter() {
  return (
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="280" fill="#F5F5F5"/>
      <rect x="0" y="215" width="400" height="65" fill="#EAEAE8"/>
      <rect x="0" y="212" width="400" height="5" fill="#D8D8D5"/>
      <polygon points="120,0 280,0 330,215 70,215" fill="#F0EFEC"/>
      <ellipse cx="200" cy="245" rx="150" ry="14" fill="#FFFFFF" opacity="0.6"/>
      <line x1="0" y1="215" x2="400" y2="215" stroke="#E0E0DC" strokeWidth="1"/>
      <line x1="0" y1="247" x2="400" y2="247" stroke="#E0E0DC" strokeWidth="1"/>
      <line x1="100" y1="215" x2="100" y2="280" stroke="#E0E0DC" strokeWidth="1"/>
      <line x1="200" y1="215" x2="200" y2="280" stroke="#E0E0DC" strokeWidth="1"/>
      <line x1="300" y1="215" x2="300" y2="280" stroke="#E0E0DC" strokeWidth="1"/>
      <rect x="155" y="30" width="90" height="185" rx="3" fill="#D8D8D5"/>
      <rect x="160" y="35" width="80" height="175" rx="2" fill="#E8E8E5"/>
      <line x1="200" y1="35" x2="200" y2="210" stroke="#D0D0CC" strokeWidth="2"/>
      <ellipse cx="222" cy="122" rx="6" ry="6" fill="#C8C0B0"/>
      <ellipse cx="222" cy="122" rx="3" ry="3" fill="#A89880"/>
      <rect x="35" y="80" width="70" height="90" rx="4" fill="#E0D8D0"/>
      <rect x="40" y="85" width="60" height="80" rx="2" fill="#EAE4DC"/>
      <ellipse cx="70" cy="125" rx="20" ry="25" fill="#C8A870" opacity="0.4"/>
      <rect x="330" y="190" width="28" height="25" rx="3" fill="#B0C0B8"/>
      <ellipse cx="344" cy="178" rx="20" ry="17" fill="#68B868"/>
      <ellipse cx="333" cy="183" rx="13" ry="11" fill="#58A858"/>
      <ellipse cx="355" cy="182" rx="13" ry="11" fill="#78C878"/>
      <rect x="170" y="0" width="60" height="8" rx="4" fill="#E8E0C8"/>
      <ellipse cx="200" cy="8" rx="50" ry="20" fill="#FFF8E0" opacity="0.5"/>
      <text x="80" y="170" fill="#C8CCC8" fontSize="14" opacity="0.8">✦</text>
      <text x="295" y="100" fill="#C8CCC8" fontSize="10" opacity="0.7">✦</text>
      <text x="55" y="55" fill="#C8CCC8" fontSize="12" opacity="0.65">✦</text>
    </svg>
  )
}

function MedicalBefore() {
  return (
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="280" fill="#9A9E98"/>
      <rect x="0" y="218" width="400" height="62" fill="#7A7E78"/>
      <rect x="0" y="215" width="400" height="6" fill="#8A8E88"/>
      <rect x="50" y="155" width="160" height="65" rx="4" fill="#5A7060"/>
      <rect x="50" y="152" width="160" height="10" rx="3" fill="#6A8070"/>
      <rect x="55" y="218" width="12" height="28" fill="#4A6050"/>
      <rect x="193" y="218" width="12" height="28" fill="#4A6050"/>
      <rect x="55" y="145" width="150" height="12" rx="6" fill="#D8D0C0" opacity="0.7"/>
      <rect x="230" y="120" width="130" height="100" rx="4" fill="#5C6060"/>
      <rect x="235" y="115" width="120" height="8" rx="2" fill="#6C7070"/>
      <rect x="240" y="128" width="30" height="35" rx="3" fill="#90A0A8" opacity="0.8" transform="rotate(-5 255 145)"/>
      <rect x="278" y="125" width="25" height="40" rx="3" fill="#7090A0" opacity="0.75" transform="rotate(8 290 145)"/>
      <rect x="308" y="130" width="28" height="32" rx="3" fill="#80A090" opacity="0.8"/>
      <rect x="340" y="122" width="15" height="45" rx="4" fill="#7080A0" opacity="0.7"/>
      <ellipse cx="130" cy="240" rx="25" ry="8" fill="#6A7060" opacity="0.5"/>
      <circle cx="100" cy="248" r="10" fill="#7A8070" opacity="0.6"/>
      <rect x="280" y="235" width="30" height="20" rx="2" fill="#6A7060" opacity="0.55"/>
      <ellipse cx="100" cy="175" rx="20" ry="6" fill="#4A6050" opacity="0.5"/>
      <ellipse cx="150" cy="185" rx="15" ry="5" fill="#4A6050" opacity="0.45"/>
      <ellipse cx="350" cy="80" rx="22" ry="15" fill="#8A8E80" opacity="0.35"/>
      <ellipse cx="60" cy="120" rx="18" ry="12" fill="#8A8E80" opacity="0.3"/>
      <rect x="20" y="80" width="80" height="120" rx="4" fill="#708080" opacity="0.85"/>
      <rect x="25" y="85" width="70" height="110" rx="3" fill="#607070" opacity="0.9"/>
      <rect x="35" y="95" width="50" height="35" rx="2" fill="#506060" opacity="0.8"/>
      <rect x="20" y="80" width="80" height="5" fill="#909A98" opacity="0.6"/>
    </svg>
  )
}

function MedicalAfter() {
  return (
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="280" fill="#F0F8F5"/>
      <rect x="0" y="218" width="400" height="62" fill="#E8F4F0"/>
      <rect x="0" y="215" width="400" height="5" fill="#D0E8E4"/>
      <line x1="0" y1="247" x2="400" y2="247" stroke="#D8EEE8" strokeWidth="1"/>
      <line x1="133" y1="215" x2="133" y2="280" stroke="#D8EEE8" strokeWidth="1"/>
      <line x1="266" y1="215" x2="266" y2="280" stroke="#D8EEE8" strokeWidth="1"/>
      <rect x="50" y="155" width="160" height="65" rx="4" fill="#FFFFFF"/>
      <rect x="50" y="152" width="160" height="10" rx="3" fill="#E8F4F0"/>
      <rect x="55" y="218" width="12" height="28" fill="#C8DCD8"/>
      <rect x="193" y="218" width="12" height="28" fill="#C8DCD8"/>
      <rect x="55" y="145" width="150" height="12" rx="6" fill="#F8F8F8"/>
      <rect x="230" y="120" width="130" height="100" rx="4" fill="#FFFFFF"/>
      <rect x="235" y="115" width="120" height="8" rx="2" fill="#E0EEE8"/>
      <rect x="242" y="128" width="25" height="35" rx="3" fill="#A8D0C8"/>
      <rect x="272" y="128" width="25" height="35" rx="3" fill="#88BCD4"/>
      <rect x="302" y="128" width="25" height="35" rx="3" fill="#A8D4B8"/>
      <rect x="340" y="128" width="14" height="45" rx="4" fill="#90C0D8"/>
      <rect x="350" y="45" width="30" height="8" rx="3" fill="#60B090" opacity="0.5"/>
      <rect x="361" y="34" width="8" height="30" rx="3" fill="#60B090" opacity="0.5"/>
      <rect x="20" y="80" width="80" height="120" rx="4" fill="#E8F4F0"/>
      <rect x="25" y="85" width="70" height="110" rx="3" fill="#F0FAF8"/>
      <rect x="35" y="95" width="50" height="35" rx="2" fill="#A0D0C8"/>
      <rect x="45" y="100" width="30" height="20" rx="1" fill="#80C0B8" opacity="0.6"/>
      <rect x="300" y="30" width="80" height="65" rx="4" fill="#D0EEF8"/>
      <rect x="300" y="30" width="80" height="65" rx="4" fill="none" stroke="#C0DDE8" strokeWidth="5"/>
      <line x1="340" y1="30" x2="340" y2="95" stroke="#C0DDE8" strokeWidth="2.5"/>
      <text x="140" y="100" fill="#A8D8D0" fontSize="15" opacity="0.8">✦</text>
      <text x="370" y="155" fill="#A8D8D0" fontSize="10" opacity="0.7">✦</text>
      <text x="65" y="55" fill="#A8D8D0" fontSize="12" opacity="0.65">✦</text>
      <ellipse cx="200" cy="240" rx="140" ry="10" fill="#FFFFFF" opacity="0.4"/>
    </svg>
  )
}

/* ── Scene arrays ── */
const beforeScenes = [OfficeBefore, HomeBefore, RetailBefore, ConstructionBefore, HallwayBefore, MedicalBefore]
const afterScenes  = [OfficeAfter,  HomeAfter,  RetailAfter,  ConstructionAfter,  HallwayAfter,  MedicalAfter]

/* ── Gallery Card ── */
function GalleryCard({ item, BeforeScene, AfterScene, onClick }) {
  const { t } = useTranslation()
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.4 }}
      onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)}
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover transition-shadow duration-300"
      style={{ aspectRatio: '4/3' }}>

      <div className="absolute inset-0">
        <BeforeScene />
      </div>

      <motion.div className="absolute inset-0"
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={{ clipPath: hovered ? 'inset(0 0% 0 0)' : 'inset(0 50% 0 0)' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}>
        <AfterScene />
      </motion.div>

      <motion.div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
        animate={{ left: hovered ? '100%' : '50%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }} />

      {!hovered && (
        <>
          <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-full z-20">{t('gallery.beforeLabel')}</div>
          <div className="absolute top-3 right-3 bg-white/60 backdrop-blur-sm text-slate-800 text-[10px] font-bold px-2 py-1 rounded-full z-20">{t('gallery.afterLabel')}</div>
        </>
      )}

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 backdrop-blur-[2px] z-20 flex flex-col items-center justify-center gap-3"
        style={{ background: 'rgba(13,27,75,0.5)' }}>
        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
          <ZoomIn className="w-6 h-6 text-white" />
        </div>
        <div className="text-center">
          <p className="text-white font-bold text-sm">{item.label}</p>
          <p className="text-white/60 text-xs mt-0.5">{item.category}</p>
        </div>
      </motion.div>

      <div className="absolute bottom-3 left-3 z-10">
        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg"
          style={{ background: 'linear-gradient(135deg, #D4B558, #C9A040)', color: '#06102A' }}>
          {item.category}
        </span>
      </div>
    </motion.div>
  )
}

/* ── Lightbox ── */
function Lightbox({ item, AfterScene, onClose, onPrev, onNext }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/92 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}>
      <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }} transition={{ duration: 0.3 }}
        className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
        <div className="w-full h-80 rounded-2xl overflow-hidden">
          <AfterScene />
        </div>
        <div className="mt-4 text-center text-white">
          <h3 className="font-display font-bold text-xl">{item.label}</h3>
          <p className="text-white/50 text-sm mt-1">{item.category}</p>
        </div>
        <button onClick={onClose} className="absolute -top-4 -right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"><X className="w-5 h-5" /></button>
        <button onClick={onPrev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"><ChevronLeft className="w-5 h-5" /></button>
        <button onClick={onNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"><ChevronRight className="w-5 h-5" /></button>
      </motion.div>
    </motion.div>
  )
}

/* ── Gallery Section ── */
export default function Gallery() {
  const { t } = useTranslation()
  const items = t('gallery.items')
  const [selectedIdx, setSelectedIdx] = useState(null)

  if (!Array.isArray(items)) return null

  const prev = () => setSelectedIdx((i) => (i - 1 + items.length) % items.length)
  const next = () => setSelectedIdx((i) => (i + 1) % items.length)

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="section-tag"><Eye className="w-3.5 h-3.5" />{t('gallery.tag')}</span>
          <h2 className="section-title text-4xl md:text-5xl mb-5">
            {t('gallery.title')}<br />
            <span className="gradient-text">{t('gallery.titleHighlight')}</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">{t('gallery.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <GalleryCard key={i} item={item}
              BeforeScene={beforeScenes[i]}
              AfterScene={afterScenes[i]}
              onClick={() => setSelectedIdx(i)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIdx !== null && (
          <Lightbox item={items[selectedIdx]}
            AfterScene={afterScenes[selectedIdx]}
            onClose={() => setSelectedIdx(null)} onPrev={prev} onNext={next} />
        )}
      </AnimatePresence>
    </section>
  )
}
