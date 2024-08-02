import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./SideBar";

export default function Instructions() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-6 m-4 p-4 ">
          <div className="row m-2">
            <div className="col-md-12 p-2">
              <h4 className="p-2 text-primary" style={{ fontWeight: "bold" }}>
                Instructions to Author
              </h4>
              <p className="p-2" style={{ textAlign: "justify" }}>
                <span style={{ fontWeight: "bold" }}>
                  Format of Articles:<br></br>
                </span>
                <ul style={{ textAlign: "left" }}>
                  <li>Title</li>
                  <li>
                    Author’s affiliation (Author Name, Department, College,
                    State, Country, Mobile Number and E-Mail should be provided)
                  </li>
                  <li>The Abstract should not be more than 400 words.</li>
                  <li>About 3 to 6 keywords should be provided.</li>
                  <li>Heading and subheading should be numbered.</li>
                </ul>
                <span style={{ fontWeight: "bold" }}>
                  e.g.<br></br>
                </span>
                <ul style={{ textAlign: "left", listStyleType: "decimal" }}>
                  <li>Introduction</li>
                  <li>Material and Methods</li>
                  <li>Results</li>
                  <li>Discussion</li>
                  <li>Conclusion</li>
                  <li>Acknowledgement</li>
                  <li>References</li>
                </ul>
                <span style={{ fontWeight: "bold" }}>References:</span>
                The reference number should follow the following format.
                <br /><br />
                <span style={{ fontWeight: "bold" }}>For Journals Format:</span>
                Author(s) of article (surname initials). Title of the
                manuscript. Journal title abbreviated Year of publication;
                volume number (issue number): page numbers.
                <br /><br />
                Standard journal article (If more than six authors, the first
                six shall be listed followed by et al.)
              </p>
            </div>
            <div className="col-md-12 p-2">
              <h4 className="p-2 text-primary" style={{ fontWeight: "bold" }}>
                Ethical Matters
              </h4>
              <p className="p-2" style={{ textAlign: "justify" }}>
                Authors involving in the usage of experimental animals and human
                subjects in their research article should seek approval from the
                appropriate Ethical committee in accordance with “Principles of
                Laboratory Animal Care”. The Method section of the manuscript
                should include a statement to prove that the investigation was
                approved and that informed consent was obtained.
                <br /><br />
                <span style={{ fontWeight: "bold" }}>Role of Editors:</span>
                The role of the editors is to evaluate the suitability of
                submitted manuscripts for the journal, including: (a) the
                quality of the manuscript, (b) whether it meets the Aims and
                Scope of the journal, and (c) the originality of the work. The
                editors will not disclose information about a submitted
                manuscript to anyone other than the corresponding author,
                reviewers or potential reviewers, or other members of the
                editorial board. Editors will ensure the prompt handling of the
                review process. Editors will evaluate the merit of manuscripts
                for intellectual content without regard to race, gender, country
                of origin, ethnicity, religion, or sexual orientation.
                <br /><br />
                <span style={{ fontWeight: "bold" }}>Role of Reviewers: </span>
                Peer review is essential to the journal in assisting in making
                editorial decisions and assisting authors in manuscript
                improvement. Reviewers should point out relevant publications
                not cited in the manuscript and point out any similarities with
                previously published works. Reviewers should not consider
                manuscripts with conflicts of interest, competitive, financial,
                or collaborative. If a potential reviewer feels unqualified to
                review the manuscript, that reviewer should notify the editors
                immediately and decline the review. Manuscripts received for
                review will be treated as confidential documents and not shown
                or discussed with other without authorization from the editors.
                Authors should expect to receive reviewer reports in a prompt
                manner, normally within three weeks. Reviewer misconduct (breach
                of confidentiality, delay of peer review, plagiarism, or
                conflicts of interest) will not be tolerated.
                <br /><br />
                <span style={{ fontWeight: "bold" }}>Role of Authors: </span>
                Authors of original research (not previously published or under
                consideration for publication elsewhere) should be an accurate
                presentation of the work carried out, a discussion of the
                significance of the work in context with previous works, and
                should contain sufficient experimental detail to allow others to
                replicate the work. Appropriate citation of previously published
                works must always be included. Authors should disclose any
                financial or other conflicts of interest that may be construed
                as influencing the data or interpretation. All sources of
                financial support should be disclosed. Authorship should be
                limited to those persons who have made a significant
                contribution to the work in terms of conception, design,
                experimental implementation, and data analysis and
                interpretation. All persons making significant contributions
                should be included as co-authors. If an author discovers a
                significant error in the published work, the author is obligated
                to inform the journal editor in order to either correct or
                retract the paper.
                <br /><br />
                <span style={{ fontWeight: "bold" }}>
                  Role of the Publisher:{" "}
                </span>
                In cases of proven scientific misconduct, plagiarism, or
                fraudulent publication, the publisher, in collaboration with the
                editorial board, will take appropriate action to clarify the
                situation, publish an erratum, or retract the work in question.
                <br /><br />
              </p>
            </div>
            <div className="col-md-12 p-2">
              <h4 className="p-2 text-primary" style={{ fontWeight: "bold" }}>
                Instructions to Reviewer
              </h4>
              <p className="p-2" style={{ textAlign: "justify" }}>
                <span style={{ fontWeight: "bold" }}>
                  Criteria for Reviewing:{" "}
                </span>
                Reviewers could judge any manuscript on the basis of following
                criteria:
                <br /><br />
                <span style={{ fontWeight: "bold" }}>
                  Format of the Article:{" "}
                </span>
                Any major divergence from the standard manuscript format should
                be indicated.
                <br /><br />
                <span style={{ fontWeight: "bold" }}>
                  Technical Presentation:{" "}
                </span>
                The research article should be technically presented instead of
                being presented as a story. Mere repetition of past work should
                not be accepted. You can look for conceptual advancement over
                previously published work. Any major omission of the previously
                published findings on the similar problem must be checked.
                <br /><br />
                <span style={{ fontWeight: "bold" }}>
                  Interpretation of Result:{" "}
                </span>
                he discussion should hover around the result and should not
                include irrelevant and unachievable statement.
                <br /><br />
                <span style={{ fontWeight: "bold" }}>
                  Statistical Presentation:{" "}
                </span>
                Proper statistics should be applied over the data wherever found
                necessary.
                <br /><br />
                <span style={{ fontWeight: "bold" }}>Plagiarism of Data:</span>
                Data showing any type of suspicion, duplication and manipulation
                must be brought to the notice of the author(s).
                <br /><br />
                <span style={{ fontWeight: "bold" }}>Summary:</span>
                Pin point the strength and weakness of the article considering
                potential importance of the work in the context of present and
                future.
                <br /><br />
                <span style={{ fontWeight: "bold" }}>Conclusion: </span>
                At the end reviewer(s) can recommend necessary corrections
                needed to accept the paper, if they are actually required, else
                recommend it for publication. If found unsuitable the paper
                should be declared as unacceptable for publication.
              </p>
            </div>
            <div className="col-md-12 p-2">
              <h4 className="p-2 text-primary" style={{ fontWeight: "bold" }}>
                Publication Policy
              </h4>
              <p className="p-2" style={{ textAlign: "justify" }}>
                The journal employs the double-blind peer review process, where
                both reviewers and authors remain anonymous throughout the
                review process.
                <br /><br />
                Every proposal submitted for publication is read at least by an
                editor, for an initial review. If the paper agrees with
                editorial policies and with a minimum quality level, is sent to
                two reviewers. The reviewers won’t know the author’s identity,
                as any identifying information will be stripped from the
                document before review.
                <br /><br />
                Reviewers’ comments to the editors are confidential and before
                passing on to the author will made anonymous. Based on the
                reviewers’ comments, the Editorial Board makes a final decision
                on the acceptability of the manuscript, and communicates to the
                authors the decision, along with referees’ reports. Whether
                significant revisions are proposed, acceptance is dependent on
                whether the author can deal with those satisfactorily.
              </p>
            </div>
            <div className="col-md-12 p-2">
              <h4 className="p-2 text-primary" style={{ fontWeight: "bold" }}>
                Copyright
              </h4>
              <p className="p-2" style={{ textAlign: "justify" }}>
                Journal allows the author to hold the copyright and retain
                publishing rights without restrictions.
              </p>
            </div>
            <div className="col-md-12 p-2">
              <h4 className="p-2 text-primary" style={{ fontWeight: "bold" }}>
                Publication Frequency
              </h4>
              <p className="p-2" style={{ textAlign: "justify" }}>
                Journal frequency is monthly and publish 12 issue in a year.
              </p>
            </div>
            <div className="col-md-12 p-2">
              <h4 className="p-2 text-primary" style={{ fontWeight: "bold" }}>
                Publication Year
              </h4>
              <p className="p-2" style={{ textAlign: "justify" }}>
                Journal started from June, 2013.
              </p>
            </div>
            <div className="col-md-12 p-2">
              <h4 className="p-2 text-primary" style={{ fontWeight: "bold" }}>
                Publication Regularly
              </h4>
              <p className="p-2" style={{ textAlign: "justify" }}>
                This Journal is publish regularly from June, 2013 and monthly
                regularly.
              </p>
            </div>
            <div className="col-md-12 p-2">
              <h4 className="p-2 text-primary" style={{ fontWeight: "bold" }}>
                Plagiarism
              </h4>
              <p className="p-2" style={{ textAlign: "justify" }}>
                There is a zero-tolerance policy towards plagiarism in our
                journal. Manuscripts are screened for plagiarism before, during,
                and after publication, and if found they will be rejected at any
                stage of processing.
              </p>
            </div>
            <div className="col-md-12 p-2">
              <h4 className="p-2 text-primary" style={{ fontWeight: "bold" }}>
                Open Access
              </h4>
              <p className="p-2" style={{ textAlign: "justify" }}>
                In case of acceptance after peer review, you may choose to
                publish your article under Open Access terms. Open Access means
                that everyone around the world can read and download your
                article for free.
              </p>
            </div>
          </div>
        </div>
        <SideBar />            
      </div>
    </div>
  );
}
