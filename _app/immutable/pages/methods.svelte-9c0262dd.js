import{S as as,i as os,s as ns,l as a,r,a as d,m as o,n,u as l,h as s,c as u,p as t,b as rs,J as e,E as Tt}from"../chunks/index-8e726f28.js";function ls(ss){let c,i,M,fe,ge,b,ye,j,be,je,we,N,Ce,_e,f,Ee,w,ze,Pe,C,Te,Ie,Se,R,Ae,We,g,Ue,_,He,xe,D,ke,De,Le,O,Me,Ne,q,Re,Oe,p,G,qe,Ge,Q,Qe,Fe,v,L,F,Ke,Je,Ve,E,K,Ye,Be,z,J,Xe,Ze,V,$e,et,P,Y,tt,st,y,B,at,ot,X,nt,rt,Z,lt,it,T,$,dt,ut,ee,te,ht,ct,se,pt,mt,m,ae,vt,ft,I,gt,S,yt,bt,jt,oe,wt,Ct,A,_t,W,Et,zt;return{c(){c=a("div"),i=a("section"),M=a("h2"),fe=r("Housing Insecurity Metric"),ge=d(),b=a("p"),ye=r(`We calculate the housing insecurity metric using county-level student homelessness counts
			collected and provided by the `),j=a("a"),be=r("California Department of Education"),je=r(`. These counts are disaggregated by race and ethnicity and serve as a foundation for the
			scale and racial and ethnic proportions of our housing insecurity counts. We apply a
			multiplier to our county-level counts, which takes the total for student homelessness for each
			racial group and scales them up to estimate the total housing insecure population.`),we=d(),N=a("h3"),Ce=r("Understanding student data"),_e=d(),f=a("p"),Ee=r(`We access California's chronic absenteeism records for the 2019-20 school year through the
			`),w=a("a"),ze=r("DataQuest Portal"),Pe=r(`.
			This data is available from K-12 for all public schools in California and disaggregates
			homeless status and race and ethnicity counts for all students and those categorized as
			`),C=a("a"),Te=r("\u201Cchronically absent\u201D"),Ie=r(`. We use county-level counts since data at more granular geographies (school districts or
			schools) often has redacted data due to privacy concerns.`),Se=d(),R=a("h3"),Ae=r("Understanding our multiplier"),We=d(),g=a("p"),Ue=r(`We calculate our multipliers using the 5-year 2019 American Community Survey (ACS). Using the
			`),_=a("a"),He=r("methodology from Richard et al."),xe=r(`
			We identify and classify individuals from the 5-year 2019 ACS as
			`),D=a("a"),ke=r("\u201Cdoubled up\u201D"),De=r(`. We disaggregate our doubled up population by
			race/ethnicity and age to identify the proportion of student-aged (5-18 years) doubled up
			individuals within each racial/ethnic group. These proportions serve as unique multipliers for
			each racial/ethnic group, which we apply to our homeless student counts to estimate all
			housing insecurity counts.`),Le=d(),O=a("p"),Me=r(`Note: The ACS doubled up population does not include sheltered and unsheltered homeless
			individuals. In California, homeless students are more likely to be doubled up than sheltered
			or unsheltered, so they are likely overrepresented in the multipliers used to calculate
			housing insecurity. This means that our housing insecurity courts likely underestimate the
			housing insecure and homeless population in California.`),Ne=d(),q=a("p"),Re=r(`Additionally, we calculate each of our racial group multipliers using state-wide proportions.
			Therefore the estimates by county are only valid insofar as the age distribution of homeless
			individuals of different races for each county resembles the age distribution of homeless
			individuals by race for the entire state.`),Oe=d(),p=a("section"),G=a("h2"),qe=r("Doubled Up Estimate"),Ge=d(),Q=a("p"),Qe=r(`We calculate our doubled-up counts with the 5-year 2019 American Community Survey (ACS) using
			the methodology from Richard et al. Members of a household in the ACS are considered doubled
			up if they are poor or near poor (at or below 125% of a geographically adjusted poverty
			threshold) and meet any of the following criteria:`),Fe=d(),v=a("ul"),L=a("li"),F=a("strong"),Ke=r("Adult children and children-in-law"),Je=r(`: Who have children of their own, who are
				married, or who are single but living in an overcrowded situation (i.e., more than two
				people per bedroom)`),Ve=d(),E=a("li"),K=a("strong"),Ye=r("Grandchildren"),Be=r(`: Minor and adult grandchildren, excluding:
				`),z=a("ul"),J=a("li"),Xe=r(`Minor grandchildren of the household head when the household head claims responsibility
						for their needs (asked directly by the American Community Survey).`),Ze=d(),V=a("li"),$e=r(`Minor grandchildren whose single parent lives at home and is under 18 (i.e., children of
						teenage dependents)`),et=d(),P=a("li"),Y=a("strong"),tt=r("Other relatives"),st=r(`: Parents/parents-in-law, siblings/siblings-in-law, cousins,
				aunts/uncles, and other unspecified relatives of the household head who are under the age of
				65, excluding:
				`),y=a("ul"),B=a("li"),at=r(`Minor siblings of the household head when the minor\u2019s parent is not present (so that the
						household head may assume responsibility for minor siblings).`),ot=d(),X=a("li"),nt=r(`Single and childless adult siblings of the household head, when the household head is
						also single with no children\u2014 resembling a roommate situation.`),rt=d(),Z=a("li"),lt=r(`Parents/parents-in-law, siblings/siblings-in-law, cousins, aunts/uncles, and other
						unspecified relatives of the household head who are over age 65 and in an overcrowded
						situation`),it=d(),T=a("li"),$=a("strong"),dt=r("Nonrelatives"),ut=r(`: Individuals unrelated to the householder, including friends,
				visitors, and other nonrelatives, excluding:
				`),ee=a("ul"),te=a("li"),ht=r("An unmarried partner or their children, roommates/housemates, and roomers/boarders"),ct=d(),se=a("p"),pt=r(`We summarize doubled up counts for the whole state and at the county level, when available by
			the 2019 5-year ACS.`),mt=d(),m=a("section"),ae=a("h2"),vt=r("Point-in-Time Counts"),ft=d(),I=a("p"),gt=r("We publicly sourced Point-in-Time (PIT) counts from the "),S=a("a"),yt=r("HUD exchange website"),bt=r(` and local California Continuum of care (CoC) partners, responsible for coordinating regional
			PIT surveys and submitting tabulated counts to HUD.`),jt=d(),oe=a("p"),wt=r(`HUD exchange archives PIT counts provided by every CoC as of 2019. CoCs are responsible for
			providing PIT survey tabulations to HUD every year but are only required to survey their total
			(sheltered and unsheltered) homeless population on even-numbered years. CoCs in large metro
			areas count their sheltered and unsheltered homeless populations yearly, but many in smaller
			and more rural areas do not. 2022 is an even-numbered year, meaning that all CoCs were
			obligated to collect their total sheltered and unsheltered counts in this year\u2019s PIT survey.
			However, due to the pandemic, many CoCs were granted exemptions for either not counting
			unsheltered or delaying, or in some cases canceling, their 2022 PIT counts.`),Ct=d(),A=a("p"),_t=r(`For those that did not provide 2022 total PIT counts, we deferred to their 2020 PIT survey
			results, which provided their most up-to-date sheltered and unsheltered counts provided by the
			`),W=a("a"),Et=r("CoC Homeless Populations and Subpopulations Reports"),zt=r("."),this.h()},l(ie){c=o(ie,"DIV",{class:!0});var U=n(c);i=o(U,"SECTION",{id:!0,class:!0});var h=n(i);M=o(h,"H2",{class:!0});var It=n(M);fe=l(It,"Housing Insecurity Metric"),It.forEach(s),ge=u(h),b=o(h,"P",{class:!0});var de=n(b);ye=l(de,`We calculate the housing insecurity metric using county-level student homelessness counts
			collected and provided by the `),j=o(de,"A",{href:!0,target:!0,class:!0});var St=n(j);be=l(St,"California Department of Education"),St.forEach(s),je=l(de,`. These counts are disaggregated by race and ethnicity and serve as a foundation for the
			scale and racial and ethnic proportions of our housing insecurity counts. We apply a
			multiplier to our county-level counts, which takes the total for student homelessness for each
			racial group and scales them up to estimate the total housing insecure population.`),de.forEach(s),we=u(h),N=o(h,"H3",{class:!0});var At=n(N);Ce=l(At,"Understanding student data"),At.forEach(s),_e=u(h),f=o(h,"P",{class:!0});var ne=n(f);Ee=l(ne,`We access California's chronic absenteeism records for the 2019-20 school year through the
			`),w=o(ne,"A",{href:!0,target:!0,class:!0});var Wt=n(w);ze=l(Wt,"DataQuest Portal"),Wt.forEach(s),Pe=l(ne,`.
			This data is available from K-12 for all public schools in California and disaggregates
			homeless status and race and ethnicity counts for all students and those categorized as
			`),C=o(ne,"A",{href:!0,target:!0,class:!0});var Ut=n(C);Te=l(Ut,"\u201Cchronically absent\u201D"),Ut.forEach(s),Ie=l(ne,`. We use county-level counts since data at more granular geographies (school districts or
			schools) often has redacted data due to privacy concerns.`),ne.forEach(s),Se=u(h),R=o(h,"H3",{class:!0});var Ht=n(R);Ae=l(Ht,"Understanding our multiplier"),Ht.forEach(s),We=u(h),g=o(h,"P",{class:!0});var re=n(g);Ue=l(re,`We calculate our multipliers using the 5-year 2019 American Community Survey (ACS). Using the
			`),_=o(re,"A",{href:!0,target:!0,class:!0});var xt=n(_);He=l(xt,"methodology from Richard et al."),xt.forEach(s),xe=l(re,`
			We identify and classify individuals from the 5-year 2019 ACS as
			`),D=o(re,"A",{href:!0,class:!0});var kt=n(D);ke=l(kt,"\u201Cdoubled up\u201D"),kt.forEach(s),De=l(re,`. We disaggregate our doubled up population by
			race/ethnicity and age to identify the proportion of student-aged (5-18 years) doubled up
			individuals within each racial/ethnic group. These proportions serve as unique multipliers for
			each racial/ethnic group, which we apply to our homeless student counts to estimate all
			housing insecurity counts.`),re.forEach(s),Le=u(h),O=o(h,"P",{class:!0});var Dt=n(O);Me=l(Dt,`Note: The ACS doubled up population does not include sheltered and unsheltered homeless
			individuals. In California, homeless students are more likely to be doubled up than sheltered
			or unsheltered, so they are likely overrepresented in the multipliers used to calculate
			housing insecurity. This means that our housing insecurity courts likely underestimate the
			housing insecure and homeless population in California.`),Dt.forEach(s),Ne=u(h),q=o(h,"P",{class:!0});var Lt=n(q);Re=l(Lt,`Additionally, we calculate each of our racial group multipliers using state-wide proportions.
			Therefore the estimates by county are only valid insofar as the age distribution of homeless
			individuals of different races for each county resembles the age distribution of homeless
			individuals by race for the entire state.`),Lt.forEach(s),h.forEach(s),Oe=u(U),p=o(U,"SECTION",{id:!0,class:!0});var H=n(p);G=o(H,"H2",{class:!0});var Mt=n(G);qe=l(Mt,"Doubled Up Estimate"),Mt.forEach(s),Ge=u(H),Q=o(H,"P",{class:!0});var Nt=n(Q);Qe=l(Nt,`We calculate our doubled-up counts with the 5-year 2019 American Community Survey (ACS) using
			the methodology from Richard et al. Members of a household in the ACS are considered doubled
			up if they are poor or near poor (at or below 125% of a geographically adjusted poverty
			threshold) and meet any of the following criteria:`),Nt.forEach(s),Fe=u(H),v=o(H,"UL",{class:!0});var x=n(v);L=o(x,"LI",{class:!0});var Pt=n(L);F=o(Pt,"STRONG",{class:!0});var Rt=n(F);Ke=l(Rt,"Adult children and children-in-law"),Rt.forEach(s),Je=l(Pt,`: Who have children of their own, who are
				married, or who are single but living in an overcrowded situation (i.e., more than two
				people per bedroom)`),Pt.forEach(s),Ve=u(x),E=o(x,"LI",{class:!0});var ue=n(E);K=o(ue,"STRONG",{class:!0});var Ot=n(K);Ye=l(Ot,"Grandchildren"),Ot.forEach(s),Be=l(ue,`: Minor and adult grandchildren, excluding:
				`),z=o(ue,"UL",{class:!0});var he=n(z);J=o(he,"LI",{class:!0});var qt=n(J);Xe=l(qt,`Minor grandchildren of the household head when the household head claims responsibility
						for their needs (asked directly by the American Community Survey).`),qt.forEach(s),Ze=u(he),V=o(he,"LI",{class:!0});var Gt=n(V);$e=l(Gt,`Minor grandchildren whose single parent lives at home and is under 18 (i.e., children of
						teenage dependents)`),Gt.forEach(s),he.forEach(s),ue.forEach(s),et=u(x),P=o(x,"LI",{class:!0});var ce=n(P);Y=o(ce,"STRONG",{class:!0});var Qt=n(Y);tt=l(Qt,"Other relatives"),Qt.forEach(s),st=l(ce,`: Parents/parents-in-law, siblings/siblings-in-law, cousins,
				aunts/uncles, and other unspecified relatives of the household head who are under the age of
				65, excluding:
				`),y=o(ce,"UL",{class:!0});var le=n(y);B=o(le,"LI",{class:!0});var Ft=n(B);at=l(Ft,`Minor siblings of the household head when the minor\u2019s parent is not present (so that the
						household head may assume responsibility for minor siblings).`),Ft.forEach(s),ot=u(le),X=o(le,"LI",{class:!0});var Kt=n(X);nt=l(Kt,`Single and childless adult siblings of the household head, when the household head is
						also single with no children\u2014 resembling a roommate situation.`),Kt.forEach(s),rt=u(le),Z=o(le,"LI",{class:!0});var Jt=n(Z);lt=l(Jt,`Parents/parents-in-law, siblings/siblings-in-law, cousins, aunts/uncles, and other
						unspecified relatives of the household head who are over age 65 and in an overcrowded
						situation`),Jt.forEach(s),le.forEach(s),ce.forEach(s),it=u(x),T=o(x,"LI",{class:!0});var pe=n(T);$=o(pe,"STRONG",{class:!0});var Vt=n($);dt=l(Vt,"Nonrelatives"),Vt.forEach(s),ut=l(pe,`: Individuals unrelated to the householder, including friends,
				visitors, and other nonrelatives, excluding:
				`),ee=o(pe,"UL",{class:!0});var Yt=n(ee);te=o(Yt,"LI",{class:!0});var Bt=n(te);ht=l(Bt,"An unmarried partner or their children, roommates/housemates, and roomers/boarders"),Bt.forEach(s),Yt.forEach(s),pe.forEach(s),x.forEach(s),ct=u(H),se=o(H,"P",{class:!0});var Xt=n(se);pt=l(Xt,`We summarize doubled up counts for the whole state and at the county level, when available by
			the 2019 5-year ACS.`),Xt.forEach(s),H.forEach(s),mt=u(U),m=o(U,"SECTION",{id:!0,class:!0});var k=n(m);ae=o(k,"H2",{class:!0});var Zt=n(ae);vt=l(Zt,"Point-in-Time Counts"),Zt.forEach(s),ft=u(k),I=o(k,"P",{class:!0});var me=n(I);gt=l(me,"We publicly sourced Point-in-Time (PIT) counts from the "),S=o(me,"A",{href:!0,target:!0,class:!0});var $t=n(S);yt=l($t,"HUD exchange website"),$t.forEach(s),bt=l(me,` and local California Continuum of care (CoC) partners, responsible for coordinating regional
			PIT surveys and submitting tabulated counts to HUD.`),me.forEach(s),jt=u(k),oe=o(k,"P",{class:!0});var es=n(oe);wt=l(es,`HUD exchange archives PIT counts provided by every CoC as of 2019. CoCs are responsible for
			providing PIT survey tabulations to HUD every year but are only required to survey their total
			(sheltered and unsheltered) homeless population on even-numbered years. CoCs in large metro
			areas count their sheltered and unsheltered homeless populations yearly, but many in smaller
			and more rural areas do not. 2022 is an even-numbered year, meaning that all CoCs were
			obligated to collect their total sheltered and unsheltered counts in this year\u2019s PIT survey.
			However, due to the pandemic, many CoCs were granted exemptions for either not counting
			unsheltered or delaying, or in some cases canceling, their 2022 PIT counts.`),es.forEach(s),Ct=u(k),A=o(k,"P",{class:!0});var ve=n(A);_t=l(ve,`For those that did not provide 2022 total PIT counts, we deferred to their 2020 PIT survey
			results, which provided their most up-to-date sheltered and unsheltered counts provided by the
			`),W=o(ve,"A",{href:!0,target:!0,class:!0});var ts=n(W);Et=l(ts,"CoC Homeless Populations and Subpopulations Reports"),ts.forEach(s),zt=l(ve,"."),ve.forEach(s),k.forEach(s),U.forEach(s),this.h()},h(){t(M,"class","svelte-jmzjde"),t(j,"href","https://www.cde.ca.gov/ds/ad/dataquest.asp"),t(j,"target","_blank"),t(j,"class","svelte-jmzjde"),t(b,"class","svelte-jmzjde"),t(N,"class","svelte-jmzjde"),t(w,"href","https://www.cde.ca.gov/ds/ad/dataquest.asp"),t(w,"target","_blank"),t(w,"class","svelte-jmzjde"),t(C,"href","https://www.cde.ca.gov/ta/ac/cm/chronabscal.asp"),t(C,"target","_blank"),t(C,"class","svelte-jmzjde"),t(f,"class","svelte-jmzjde"),t(R,"class","svelte-jmzjde"),t(_,"href","https://nlihc.org/sites/default/files/Quantifying-Doubled-Up-Homelessness.pdf"),t(_,"target","_blank"),t(_,"class","svelte-jmzjde"),t(D,"href","#doubled-up"),t(D,"class","svelte-jmzjde"),t(g,"class","svelte-jmzjde"),t(O,"class","note svelte-jmzjde"),t(q,"class","note svelte-jmzjde"),t(i,"id","insecurity"),t(i,"class","svelte-jmzjde"),t(G,"class","svelte-jmzjde"),t(Q,"class","svelte-jmzjde"),t(F,"class","svelte-jmzjde"),t(L,"class","svelte-jmzjde"),t(K,"class","svelte-jmzjde"),t(J,"class","svelte-jmzjde"),t(V,"class","svelte-jmzjde"),t(z,"class","svelte-jmzjde"),t(E,"class","svelte-jmzjde"),t(Y,"class","svelte-jmzjde"),t(B,"class","svelte-jmzjde"),t(X,"class","svelte-jmzjde"),t(Z,"class","svelte-jmzjde"),t(y,"class","svelte-jmzjde"),t(P,"class","svelte-jmzjde"),t($,"class","svelte-jmzjde"),t(te,"class","svelte-jmzjde"),t(ee,"class","svelte-jmzjde"),t(T,"class","svelte-jmzjde"),t(v,"class","svelte-jmzjde"),t(se,"class","svelte-jmzjde"),t(p,"id","doubled-up"),t(p,"class","svelte-jmzjde"),t(ae,"class","svelte-jmzjde"),t(S,"href","https://www.hudexchange.info/"),t(S,"target","_blank"),t(S,"class","svelte-jmzjde"),t(I,"class","svelte-jmzjde"),t(oe,"class","svelte-jmzjde"),t(W,"href","https://www.hudexchange.info/programs/coc/coc-homeless-populations-and-subpopulations-reports/?filter_Year=2020&filter_Scope=CoC&filter_State=CA&filter_CoC=&program=CoC&group=PopSub"),t(W,"target","_blank"),t(W,"class","svelte-jmzjde"),t(A,"class","svelte-jmzjde"),t(m,"id","pit"),t(m,"class","svelte-jmzjde"),t(c,"class","methods-container svelte-jmzjde")},m(ie,U){rs(ie,c,U),e(c,i),e(i,M),e(M,fe),e(i,ge),e(i,b),e(b,ye),e(b,j),e(j,be),e(b,je),e(i,we),e(i,N),e(N,Ce),e(i,_e),e(i,f),e(f,Ee),e(f,w),e(w,ze),e(f,Pe),e(f,C),e(C,Te),e(f,Ie),e(i,Se),e(i,R),e(R,Ae),e(i,We),e(i,g),e(g,Ue),e(g,_),e(_,He),e(g,xe),e(g,D),e(D,ke),e(g,De),e(i,Le),e(i,O),e(O,Me),e(i,Ne),e(i,q),e(q,Re),e(c,Oe),e(c,p),e(p,G),e(G,qe),e(p,Ge),e(p,Q),e(Q,Qe),e(p,Fe),e(p,v),e(v,L),e(L,F),e(F,Ke),e(L,Je),e(v,Ve),e(v,E),e(E,K),e(K,Ye),e(E,Be),e(E,z),e(z,J),e(J,Xe),e(z,Ze),e(z,V),e(V,$e),e(v,et),e(v,P),e(P,Y),e(Y,tt),e(P,st),e(P,y),e(y,B),e(B,at),e(y,ot),e(y,X),e(X,nt),e(y,rt),e(y,Z),e(Z,lt),e(v,it),e(v,T),e(T,$),e($,dt),e(T,ut),e(T,ee),e(ee,te),e(te,ht),e(p,ct),e(p,se),e(se,pt),e(c,mt),e(c,m),e(m,ae),e(ae,vt),e(m,ft),e(m,I),e(I,gt),e(I,S),e(S,yt),e(I,bt),e(m,jt),e(m,oe),e(oe,wt),e(m,Ct),e(m,A),e(A,_t),e(A,W),e(W,Et),e(A,zt)},p:Tt,i:Tt,o:Tt,d(ie){ie&&s(c)}}}class ds extends as{constructor(c){super(),os(this,c,null,ls,ns,{})}}export{ds as default};
