import Counter from "./Counter";

const FunFacts = () => {
  return (
    <section id="fun_facts">
      <div className="container">
        <div className="fn_cs_counter_list">
          <ul>
            <li>
              <div className="item">
                <h3 className="fn__gradient_title">
                  <span className="prefix" />
                  <Counter end={9999} />
                  <span className="suffix">+</span>
                </h3>
                <p>Registered Students</p>
                <div className="divider" />
              </div>
            </li>
            <li>
              <div className="item">
                <h3 className="fn__gradient_title">
                  <span className="prefix" />
                  <Counter end={10} />
                  <span className="suffix"/>
                </h3>
                <p>Years of Legacy</p>
                <div className="divider" />
              </div>
            </li>
            <li>
              <div className="item">
                <h3 className="fn__gradient_title">
                  <span className="prefix" />
                  <Counter end={32} />
                  <span className="suffix" >+</span>
                </h3>
                <p>Events</p>
                <div className="divider" />
              </div>
            </li>
            <li>
              <div className="item">
                <h3 className="fn__gradient_title">
                  <span className="prefix" />
                  <Counter end={3} />
                  <span className="suffix">Lakh+</span>
                </h3>
                <p>Prize Money</p>
                <div className="divider" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default FunFacts;
