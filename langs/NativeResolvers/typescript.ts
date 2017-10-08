/// <reference path="../StdLibs/stdlib.d.ts" />

class console {
    static log(data: any) {
        OneConsole.print(data);
    }
}

class Object {
    static keys<K,V>(map: OneMap<K,V>): OneArray<K> {
        return map.keys();
    }

    static values<K,V>(map: OneMap<K,V>): OneArray<V> {
        return map.values();
    }
}

class TsArray<T> {
    _one: OneArray<T>;

    get length(): number { return this._one.length; }

    push(item: T) {
        this._one.add(item);
    }
}

class TsMap<K,V> {
    _one: OneMap<K,V>;

    delete(key: K) {
        this._one.remove(key);
    }
}

class TsMapOperators {
    op_in<K,V>(left: K, right: TsMap<K,V>): boolean {
        return right._one.hasKey(left);
    }

    op_set<K,V>(map: OneMap<K,V>, key: K, value: V) {
        map.set(key, value);
    }

    op_get<K,V>(map: OneMap<K,V>, key: K): V {
        return map.get(key);
    }
}
